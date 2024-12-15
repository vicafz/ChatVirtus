// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|0)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000); //Delay de 2000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + '! Sou a Vi, assistente virtual da Virtus Consultoria. Como posso te ajudar hoje? Por favor, digite uma das opções abaixo:\n\n1 - Sobre a Virtus\n2 - Serviços oferecidos\n3 - Como aderir\n4 - Falar com atendente'); //Primeira mensagem de texto
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3 segundos
    
        
    }
    




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'A Virtus é uma consultoria em desenvolvimento de Chatbots, análise de dados para o seu négocio, criação de landing pages, e outros serviços. Apesar do curto tempo de mercado, já acumulamos mais de 50 clientes satisfeitos e fidelizados!\n\n A nossa proposta é entregar soluções de forma rápida e com qualidade para pequenas e médias empresas, de forma que possamos crescer juntos e agregar mais valor a diversos modelos de negócio.\n\nSe identificou com o nosso estilo de ser e de trazer modernização a sua empresa?\n\nDá uma olhada no menu novamente e continue nos conhecendo ou marque uma reunião com um de nossos atendentes.');
        await delay(3000);
        await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n1 - Sobre a Virtus\n2 - Serviços oferecidos\n3 - Como aderir\n4 - Falar com atendente para marcar\n5 - Encerrar'); //Primeira mensagem de texto


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*CHATBOT:* Desenvolvimento de um robô de atendimento para WhatsApp exclusivo para o seu negócio, com o fluxo montado junto a você!\n\n*PowerBI* Extraia valor das suas planilhas com dashboards incríveis! Faremos a análise dos dados que você já possui de forma a agregar valor ao seu negócio e vender ainda mais. Caso não possua planilhas ainda, iniciaremos do zero.\n\n*Landing Page:* Profissionalize sua marca e o seu negócio criando um site só seu. Pensaremos juntos no que você precisa passar no website seja você comerciante, profissional autônomo, empreendedor, etc.\n\n*Tráfego Pago:* Com essa estratégia de marketing digital que consiste em investir em anúncios para que o site ou perfil de uma empresa seja exibido para um público-alvo, conseguimos aumentar o número de visitantes e as chances de conversão.');

    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Para todos os nossos clientes, agendamos uma reunião on-line de alinhamento para entender as necessidades do negócio, e os objetivos a serem adquiridos com a tecnologia implantada.\n\nAssim, ficamos todos na mesma página para juntos atingirmos o objetivo estabelecido!\n\nPara dar mais detalhes do seu modelo de negócio preencha o formulário abaixo, e agende a reunião com um de nossos atendentes.');
        
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Link para o formulário: https://site.com');
        await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n0 - Início\n1 - Sobre a Virtus\n2 - Serviços oferecidos\n3 - Como aderir\n4 - Falar com atendente para marcar\n5 - Encerrar'); //Primeira mensagem de texto

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(1000); //Delay de 1000 milisegundos mais conhecido como 1 segundo
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Olá! Você selecionou a opção de tratar com uma atendente Virtus, aguarde enquanto te direciono a pessoa disponível...\n\nEnquanto isso, preencha o formulário abaixo para que o atendente possa guiar melhor o seu atendimento:');


        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Formulário: https://site.com');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');


    }








});