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
            .select() // 全てSelectする
        console.log('data', data)
        console.log('error', error)
    }

    const onClickDeleteButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .delete()
            .eq('id', 1)
        // どちらもnullになる
        console.log('data', data)
        console.log('error', error)
    }

    const onClickUpdateButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .upsert({ id: 1222, test_sui: 'aasadaf' })
            .select()
        // errorが発生する。エラーメッセ―ジはinsertできませんよ。だった。セキュリティ高めたいから？
        console.log('data', data)
        console.log('error', error)
    }

    const onClickInsertButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .insert({ test_sui: "sadvsasda" })
        // errorが発生する。エラーメッセ―ジはinsertできませんよ
        console.log('data', data)
        console.log('error', error)
    }

    const onClickGreaterThanOrEqualButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .select()
            .gte('id', 2)
        console.log('data', data)
        console.log('error', error)
    }

    const onClickLessThanButton = async () => {
        const { data, error } = await supabase
            .from('Test')
            .select()
            .lt('id', 2)
        console.log('data', data)
        console.log('error', error)
    }

    const onClickGenerateRandomButton = async () => {
        /**
         * 
         * SQL Editorで作った関数を実行する
        create or replace function get_random_scores()
        returns table (
            id int,
            score int,
            adjusted_score int  -- floatからintに変更
        )
        language sql
        as $$
            select 
                id,
                score,
                score + floor(random() * 100)::int as adjusted_score
            from your_table
            order by adjusted_score desc;
        $$;
         */
        const { data, error } = await supabase
            .rpc('get_random_scores')
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
                <button onClick={onClickGreaterThanOrEqualButton}>GreaterThanOrEqual query!</button>
                <button onClick={onClickLessThanButton}>LessThan query!</button>
                <button onClick={onClickGenerateRandomButton}>GenerateRandom query!</button>
            </div>
        </>
    )
}

export default Test