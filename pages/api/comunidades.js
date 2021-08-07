import {SiteClient} from 'datocms-client';

export default async function recebedorDeRequests(request, response){
    if(request.method === 'POST'){
        const TOKEN = 'd486869a237459b2eb2f989b1ad6fd';
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: '1039136',
            ...request.body,
            // title : "comunidade de teste",
            // imageUrl: 'https://github.com/omariosouto.png',
            // creatorSlug: 'omariosouto'
    
        });
    
        response.json({
            dados: 'algum dado',
            registroCriado: registroCriado,
        });
        return;
    }
    response.status(404).json({
        message: 'Ainda não temos nada no GET'
    });
}