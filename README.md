# Generador y Control de Color RGB

Aplicación web interactiva para experimentar y visualizar colores mediante la combinación de canales de color RGB (**Rojo**, **Verde** y **Azul**) en tiempo real.

## 🚀 Descripción

Esta aplicación permite interactuar con controles deslizantes (`input` de tipo `range`) para ajustar los valores numéricos de los canales RGB en un rango de `0` a `255`. A medida que se modifican los valores, la interfaz actualiza los números en pantalla y aplica dinámicamente el color resultante como fondo de la página.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura de la aplicación con elementos de entrada de rango.
- **CSS3**: Diseño centrado mediante Flexbox y estilos visuales.
- **JavaScript (Vanilla)**: Captura de eventos `change`/`input`, manipulación del DOM y modificación dinámica del estilo CSS del `body`.

## 📁 Estructura del proyecto

```text
colorRGB/
├── index.html    # Estructura HTML y controles deslizantes
├── style.css     # Estilos y maquetación de la interfaz
└── app.js        # Lógica para la actualización dinámica de colores
```

## 💻 Instrucciones de ejecución

1. Abre el archivo `index.html` directamente en cualquier navegador web.
2. Mueve los deslizadores de los canales **Rojo (R)**, **Verde (G)** y **Azul (B)**.
3. Observa cómo cambia la tonalidad de fondo según la combinación seleccionada.
