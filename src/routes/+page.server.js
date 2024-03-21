import { error } from '@sveltejs/kit';

export async function load() {
    try {

        const response = await fetch('http://localhost:8099/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ act: 'procGetAccounts' }),
        });

        if (!response.ok) {
            throw error(400, 'Network response was not ok'); 
        }

        const data = await response.json();
        
        return {
            data
        };
        
    } catch (err) { 
        throw error(500, '서버에서 데이터를 가져오는 데 실패했습니다.');
    }
}
