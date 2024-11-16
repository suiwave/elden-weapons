import './App.css'
import '@aws-amplify/ui-react/styles.css';
import WeaponList from './components/ui-components/WeaponList';
import { WeaponListOverridesProps } from './components/ui-components/WeaponList';
import { Weapons } from './constants/weapons'
import Test from './components/Test';

const weaponListProps = Weapons.reduce<WeaponListOverridesProps>((acc, weapon, index) => {
  acc[`WeaponCard${index + 1}`] = {
    role: "article",
    overrides: {
      Name: {
        children: String(weapon.name)
      },
      Category: {
        children: String(weapon.weaponType)
      },
      UpgradeType: {
        children: String(weapon.upgradeMethod)
      },
      Str: {
        children: String(weapon.requirements["筋力"])
      },
      Tech: {
        children: String(weapon.requirements["技量"])
      },
      Int: {
        children: String(weapon.requirements["知力"])
      },
      Piety: {
        children: String(weapon.requirements["信仰"])
      },
      Mystery: {
        children: String(weapon.requirements["神秘"])
      },
      Arts: {
        children: String(weapon.skill)
      },
      Effects: {
        children: String(weapon.specialEffects)
      },
      HowToGet: {
        children: String(weapon.acquisition)
      }
    }
  };
  return acc;
}, {})

function App() {

  return (
    <>
      <Test />
      <WeaponList
        overrides={weaponListProps}
      />
    </>
  )
}

export default App
