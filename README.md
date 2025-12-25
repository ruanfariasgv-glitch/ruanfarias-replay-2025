# Photo Replay 2025

Aplicação Next.js para criar um reel de recap do ano com liquid glass design.

## Setup Rápido

1. **Instale as dependências:**
```bash
npm install
```

2. **Organize suas fotos em `/public`:**
```
public/
├── photos/
│   ├── 1.jpg (até 9.jpg)
├── places/
│   ├── sp.jpg
│   └── vitoria.jpg
├── people/
│   └── 1.jpg (até 25.jpg)
└── flower-boy.jpg (opcional, para seção Revelações)
```

3. **Rode o projeto:**
```bash
npm run dev
```

4. **Abra:** http://localhost:3000

## Estrutura do Projeto

```
photo-replay-2025/
├── app/
│   ├── page.tsx          # Orquestrador principal
│   ├── layout.tsx        # Layout root
│   └── globals.css       # Estilos + glass effects
├── components/
│   ├── Intro.tsx         # "2025"
│   ├── GridPhotos.tsx    # Grid 3x3
│   ├── Places.tsx        # SP + Vitória
│   ├── People.tsx        # 25 pessoas
│   ├── Revelations.tsx   # Apple → Flower Boy
│   └── Outro.tsx         # Créditos
└── public/
    └── [suas fotos]
```

## Customização

### Ajustar Durações
Edite `app/page.tsx`:
```tsx
const sections = [
  { component: Intro, duration: 4000 },        // 4s
  { component: GridPhotos, duration: 18000 },  // 18s
  // ...
]
```

### Coordenadas de Vitória
Edite `components/Places.tsx`:
```tsx
text: '20°19\'18"S 40°20\'09"W',
```

### Seu Instagram
Edite `components/Outro.tsx`:
```tsx
<p>@seu_instagram</p>
```

## Gravação

1. **Instale OBS Studio**
2. **Configure:**
   - Canvas: 1080x1920 (9:16)
   - FPS: 30 ou 60
3. **Use os controles debug** (canto inferior esquerdo) para navegar
4. **Remova controles** antes da gravação final (comente o div em `app/page.tsx`)
5. **Grave!**

## Dicas

- Use fotos em alta resolução (min 1080px)
- Teste todos os timings antes de gravar
- O background gradient anima automaticamente
- Todas as transições são Apple-style (suaves)
- Para adicionar música, edite o vídeo depois

## Troubleshooting

**Imagens não aparecem:**
- Verifique se as fotos estão em `/public`
- Certifique-se que os nomes correspondem (1.jpg, 2.jpg, etc)

**Animações muito rápidas/lentas:**
- Ajuste os valores de `duration` em `app/page.tsx`

**Glass effect não aparece:**
- Certifique-se que Tailwind está configurado corretamente
- Rode `npm run dev` novamente

Boa sorte! 🚀
