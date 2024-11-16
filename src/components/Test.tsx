import { createClient } from '@supabase/supabase-js'
import { Database } from '../supabase'

function Test() {

    // Create a single supabase client for interacting with your database
    const supabase = createClient<Database>(
        'https://ltcctidcyagyelpmpupr.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Y2N0aWRjeWFneWVscG1wdXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzNjQ0NDksImV4cCI6MjA0Njk0MDQ0OX0.IO6MImlIgFhFXRsG5PqhN45DzAFYU84ox7vjl6hssL0'
    )

    const onClickButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .select()
        console.log('data', data)
        console.log('error', error)
    }

    const onClickDeleteButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .delete()
            .eq('id', 1)
        console.log('data', data)
        console.log('error', error)
    }
    const onClickUpdateButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .upsert({ id: 1222, test_sui: 'aasadaf' })
            .select()
        console.log('data', data)
        console.log('error', error)
    }
    const onClickInsertButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .insert({ test_sui: "sadvsasda" })
        console.log('data', data)
        console.log('error', error)
    }
    return (
        <>
            <div className='grid'>
                <button onClick={onClickButton}>query!</button>
                <button onClick={onClickDeleteButton}>delete!</button>
                <button onClick={onClickUpdateButton}>update!</button>
                <button onClick={onClickInsertButton}>insert!</button>
            </div>
        </>
    )
}

export default Test