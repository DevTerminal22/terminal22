# Terminal 22 — Site de Captação (Demo)

Pronto para abrir e testar. Estrutura feita a partir do seu *index* base, com:
- hero com CTAs para WhatsApp,
- seção de serviços,
- portfólio ilustrativo,
- **planos** com botões que abrem o WhatsApp já com mensagem personalizada,
- CTA final e rodapé.

## Rodando localmente
1. Baixe o ZIP e extraia.
2. Opção rápida: clique duas vezes em `index.html` e teste (funciona via CDN do Tailwind).
3. Opcional (melhor para testar rota/UTM):
   - Via Python: `python -m http.server 5173` e acesse http://localhost:5173
   - Via Node: `npx serve .` e acesse o endereço informado.

## Personalização
- Número do WhatsApp: edite `assets/js/main.js` na constante `WHATSAPP_NUMBER`.
- Valores e itens dos planos: altere no bloco **#planos** do `index.html`.
- Textos e cores: ajustes simples via Tailwind no `index.html` e em `assets/css/styles.css`.

## Como funciona a mensagem do WhatsApp
- Todos os botões com atributo `data-wa` levam ao WhatsApp com o texto base.
- Os botões dos planos possuem `data-plan` e `data-price`, e o script monta a mensagem:
  `Olá! Vim pelo site da Terminal 22 e quero uma landing page. | Plano: Pro (R$ 1190) | Fonte: PLANOS | UTM: ...`
- Parâmetros UTM da URL são incluídos automaticamente.

Bom teste e bora converter 💸
