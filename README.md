# ¿Qué es React.js?

**React** cumple su función como *biblioteca* ya que para utilizar su código se debe importar. También es un *Framework* aunque las convenciones de cómo debe ser organizado todo no son estrictas.
En este curso aprenderás las prácticas que la comunidad ha decidido que son buenas.

**React es declarativo**, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

**JSX** es HTML dentro de Javascript, esto se verá más adelante en detalle.

React está estructurado por **componentes** que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

# Create-react-app

**Create-react-app** es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo.

**Pasos para obtenerlo:**
Se debe instalar desde la línea de comando usando
`npm install -g create-react-app`

Una vez instalado se crea la carpeta del proyecto con
`create-react-app -nombre del proyecto-`

En este punto se estará instalando React y otras herramientas, también se configurará el entorno usando **Webpack**.

Una vez se instala todo entra a la carpeta *src* donde estará todo el código fuente de la aplicación, siendo el más importante *index.js* que es el punto de entrada a la aplicación.

Finalmente para correr la aplicación se usa el comando
`npm run start`

**Otras herramientas:**

- **Babel:** Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
- **Eslint:** Lee el código y avisa de errores.

# Conceptos principales.

Dentro de react se genera un archivo **index.html** un **div** "**app**" donde se renderiza el contenido.

Y este se modifica desde el **Index.js** donde es necesario para usar **JSX** importar **react**. Donde **react-dom** es la representación del DOM y sigue la siguiente estructura para agregar un elemento:

```javascript
ReactDom.render(Que, Donde)
```



```jsx
import React from 'react'
import ReactDom from 'react-dom'

const element = <h1>Hello, Platzi Badges !</h1>

const container = document.getElementById('app')

ReactDom.render(element, container)
```

# Componentes.

Para crear un componente creamos una carpeta **Components** dentro de **src** donde vivirán nuestros componentes.

Un componente es representado por una clase es decir debe ser un **class** que herede de **React.Component**, donde la única restricción es que esta clase debe ejecutar el método **render()** que viene de **react** . 

Dentro del método render retornamos nuestro componente con formato JSX.

```
import React from 'react'

class Badge extends React.Component{
  render() {
    return(
      <h1>Badge</h1>
    )
  }
}

export default Badge
```

Para insertar nuestro componente este se inyecta dentro del **app** desde el **index.js** de esta forma.

```
import React from 'react'
import ReactDom from 'react-dom'

import Bagde from './components/Badge'

const container = document.getElementById('app')

ReactDom.render(<Bagde />, container)
```

# Imagenes

Las imagenes se guardan en una carpeta dentro de src y se importan de la siguiente forma. Donde se ocupa el nombre como una expresión.

```jsx
import confLogo from '../images/badge-header.svg'

		<div>
          <img src={confLogo} alt="Logo de la conferencia"/>
        </div>
```

# CSS

El CSS es importando sin asignación en el componente en el cual se va a ocupar.

Como todos los componentes son **class** para especificar una clase de CSS se ocupa el atributo className.

```
import './styles/Badge.css'

<div className="badge">
        <div>
          <img src={confLogo} alt="Logo de la conferencia"/>
        </div>
</div>
```

## Instalar bootstrap

Primero se debe instalar con el manejador de paquetes.

```
npm install bootstrap
```

Este se importa en el **index.js**

```
import 'bootstrap/dist/css/bootstrap.css'
```

