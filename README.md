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

# Props

Los Props o propiedades son los llamados atributos en Html, pero en este caso de nuestros componentes.

Éstos se especifican dentro de la etiqueta del componente donde se invoca el componente en este caso en el index.js.

```jsx
ReactDom.render(<Bagde firstName="Lilly" lastName="Kaufman" />, container)
```

  

Y dentro del componente estos son llamados dentro de corchetes.

```jsx
<h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
```

# Pages

Las paginas siguen siendo componentes, pero en este caso al decir page nos referimos a **un componente que tiene dentro mas componentes.**

Este tipo de componentes van dentro de **src** en una carpeta llamada **pages**

# Enlazar eventos

Los eventos se declaran dentro del componente con la notacion **handleEvent**. 

Y son llamados desde las etiquetas como evaluaciones del propio elemento.

```jsx
onSubmit={this.handleSubmit}
onClick={this.handleClick}
onChange={this.handleChange}
```



```jsx
export class BadgeForm extends Component {

  handleChange = e => {
    console.log( {
      name : e.target.name,
      value : e.target.value
    })
  }

  handleClick = e =>{
    console.log('Button was clicked')
  }

  handleSubmit = e =>{
    e.preventDefault()
    console.log('button submit')
  }

  render() {
    return (
      <div>
        <h1>New attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
          </div>

          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}
```

# Manejo de estado.

Principalmente esta característica permite manejar la información que guardan los elementos de nuestro componente.

Esta caracteristica es muy importante por que por cada input se guarda su valor en el mismo input y mas aparte este valor es guardado en el state es decir doble esfuerzo, lo cual no es algo optimo para el desarrollo de una aplicación ya que es preferible tener un solo origen de datos.

Esta caracteristica es activada dentro del metodo handleChange ya que este es el encargado de escuchar cuando se cambia algo dentro de un campo.

Donde se asigna el valor del State mediante la instrucción this.setState() y donde [**e.target.name**] especifica que por cada campo que escuche **e** tomara su nombre y asignara el valor que contiene por defecto si es controlado.

```jsx
  handleChange = e => {
    // console.log( {
      // name : e.target.name,
      // value : e.target.value
    // })

    this.setState({
      [e.target.name]: e.target.value,
    })
  }
```

Despues dentro de los atributos de los elementos debemos especificar que los datos de este seran tomados del estado del elemento.

```jsx
<div className="form-group">
            <label>First Name</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="firstName"
              value= {this.state.firstName}
              />
          </div>
```

Para asegurarnos que el estado esta controlado se genera un objeto state que especifica los valores por defecto de los campos que estaran en el.

```
state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""

  }
```

# Levantar el estado

Se refiere a poner el State en una localización donde se le puedan pasar como props los datos a los componentes.

Y se pone al nivel que tu deseas compartir en este caso a nivel de la pagina.

Para levantar el estado el método onChange del componente no sera necesario ya que este metodo debe estar dentro de la page porque esta misma lo va a manejar.

Por lo cual se genera un state con los datos del formulario en este caso denominado **form**. Y se crea el metodo que se llamara dentro del onChange del componente el cual se va a enviar como una prop al componente para compartir el state. 

Cabe resaltar que cuando se llama al metodo handleChange el setState debe guardar el estado anterior y sobre escribir lo que se cambio ya que si se graba directamente lo que esta en el target se van a eliminar los valores que ya tenia guardados antes. Es decir copias lo que tenias antes en state y si haces un cambio este se vuelve a asignar.

```jsx
state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      twitter: "",
      jobTitle: "",
    }
  }

handleChange = e => {

    this.setState({
      form: {
        #Copia todo el objeto que estaba antes
        ... this.state.form,
        # Y reasigna si es que el objeto e escucha que se cambia alguna propiedad.
        [e.target.name] : e.target.value,
      }
    })
  }


#Componente generado que por medio del metodo onChange especifica el metodo que recibira los datos y los guardara en el estado de la page, de igual forma se manda por medio de las props el formValues que es la propiedad que asignara los datos del estado al BadgeForm.
<BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
```

Mientras tanto el badgeForm pierde el state ya que este se va a manejar dentro de la page y ya no es necesario el metodo handleChange a nivel de componente.

Y los valores de los elementos del componente reciben el state de la page mediante props.

```jsx
<div className="form-group">
            <label>First Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="firstName"
              value= {this.props.formValues.firstName}
              />
          </div>
```

# Listas de componentes.

Para este caso vamos a crear una lista de Badges.

Donde en props va a venir un arreglo de badges que se renderizara por medio de la función map.

En este ejemplo se nota como se pueden crear componentes dentro de un mismo archivo siempre y cuando solo uno se exporte.

```jsx
import React, { Component } from 'react';

import './styles/BadgesList.css'

class BadgesListItem extends Component {
  render(){
    return(
      <div className="BadgesListItem">
        <img
        className="BadgesListItem__avatar"
        src={this.props.badge.avatarUrl}
        alt={`${this.props.badge.firstName}
        ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>

          <br/> @{this.props.badge.twitter}
          <br/>
          {this.props.badge.jobTitle}
        </div>
      </div>
    )
  }
}


export class BadgesList extends Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
                {this.props.badges.map( (badge) => {
                  return (
                    <li key={badge.id}>
                      <BadgesListItem badge={badge} />
                    </li>
                  )
                })}
              </ul>
      </div>
    );
  }
}

export default BadgesList;

```

# División de la aplicación en rutas.

Para esta tarea se ocupa React-router-dom.

```
npm install react-router-dom
```

Para realizar la funcion de app principal vamos a crear un componente que se llame App dentro de el vamos a ocupar el Router para utilizarlo como templete para la paginación. 

Este es un **componente funcional**, estos son identificados por que son componentes que solo se encargan de renderizar y no cuentan con metodos o state y solo tienen un argumento en este caso las props.

Cabe resaltar que el **BrowserRouter** solo debe tener un Hijo por lo cual se agrega dentro de el un **Switch** (el cual va a retornar una ruta, la primera que coincida con lo que se esta buscando en el path), es por eso que se agrega la bandera **exact** dentro del **Router** por que si buscamos **badges/ruta** siempre va a retornarnos **/badges** ya que es la primera que coinsidira con la ruta buscada. 

```jsx
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
        </Switch>
    </BrowserRouter>
  );
}

export default App
```

## LINKS

En este momento nuestra page badges cuenta con un ancla <a> la cual debe ser cambiada por un <Link> </Link> esto es para hacer mas rapida la respuesta, ya que se esta ocupando React-router la navegación va a ser interna y no se recargara toda la pagina. 

Cada vez que tengamos que poner un ancla hacia nuestras pages usaremos el Link.

```jsx
<div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary"> 
            New Badge
            </Link>
</div>
```

# User interface con un Layout.

Se implementa un componente con nombre Layout que va a ser principalmente usado como contenedor de las pages. Y este va a estar conteniendo el Switch con las rutas de las pages e ira dentro del BrowserRouter.

```jsx
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
```

Se ocupara React.Fragment que es una herramienta que ayuda a renderizar varios componentes y/o elementos sin necesidad de colocar un div para renderizar sus hijos. Es como un Template dentro de Vue. 

Los elementos que estan dentro de Layout son identificados por el propio **children** y estos van integrados como unico argumento dentro de los **componentes funcionales**.

```jsx
import React from 'react'
import NavBar from '../components/Navbar'

function Layout(props) {
  
  return (
    <React.Fragment>
      <NavBar/>
      {props.children}
    </React.Fragment>
  )
}

export default Layout
```

# Ciclo de vida de los componentes.

Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos *props* diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

**Montaje:**

- Representa el momento donde se inserta el código del componente en el DOM.
- Se llaman tres métodos: *constructor*, *render*, *componentDidMount*.

**Actualización:**

- Ocurre cuando los *props* o el estado del componente cambian.
- Se llaman dos métodos: *render*, *componentDidUpdate*.

**Desmontaje:**

- Nos da la oportunidad de hacer limpieza de nuestro componente.
- Se llama un método: *componentWillUnmount*.


  ![img](https://maksimivanov.com/static/2ffa2b4eab0cfc3c8f74d76657f7b3ec/c4fa1/lifecycle.png)

# Introducción llamadas a un API

Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

- **Loading**: cuando la petición se envía y estamos esperando.
- **Error**: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
- **Data**: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

# Consulta a API.

Cuando consultamos un api la page encargada de guardar el state debe inicializarse con los atributos de **loading**, **error** y **data**.

```jsx
this.setState({
        loading: true,
        error: null,
        data: undefined
      })

 componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    // Reasignamos el estado por si ya se consulto y cambio, asegurandonos que siempre que se inicie una consulta este en este estado.
    this.setState({ loading: true, error: null });

    try {
      // Hacemos la consulta a la api si esta es correcta el loading y data deben cambiar su estado.
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      // Pero si produce un error se debe enviar el error causado para poder dar respuesta al usuario.
      this.setState({ loading: false, error: error });
    }
  };
```

El mejor momento para llamar una api es en el componenteDidMount que de esa forma estamos seguros que nuestros datos estan listos para recibir la consulta, es decir que ya esta cargado en el DOM.

En este momento esto se representa por medio del método **fetchData** donde nos encargamos de modificar el state del componente para poder una mejor UI.

Después dentro del render nos encargaremos de representar los diferentes estados que va a tener la pagina. Si esta cargando o si se produjo un Error.

```
if (this.state.loading === true) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error } />
    }
```

Agregamos de igual forma para mejorar la UI en la lista de badges una condición para verificar si hay badges o no. Si no hay badges se creara un anuncio y se generara un botón para crear el primer badge.

```
if (this.props.badges.length === 0) {
      return (
        <div>
          <h3> No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }
```

# Mejorando la Experiencia de Usuario durante una petición

Se creo un loader para demostrar que esta cargando la petición y también se agrega un componente para manejar el error y mejorar la UI.



# Enviando datos (POST)

**MD5** es una pequeña librería a la cual se le da un texto y ella regresa un **hash**.

Podremos hacer pruebas para cifrar nuestros textos a md5 en el siguiente sitio [MD5 Online](https://md5online.es/cifrar-md5)

Hola Platzi = d3bfb9302fb1007c0f996b41cba2818c

## Implementación de componente Gravatar

Gravatar es una api que funciona mediante el email que es cifrado con MD5 por lo tanto cuando ocuparemos el email como una prop de gravatar para hacer el hash y poder encontrarlo dentro de la api.

**gravatar.js**

```jsx
import React from "react";
import md5 from "md5";



// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
  const hash = md5(props.email);

  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
```

**badge.js**

```jsx
// import Gravatar from './Gravatar'

<div className="Badge__section-name">
          <Gravatar
            className="Badge_avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
        </div>
```

**badgesList.js** 

```jsx
import Gravatar from "./Gravatar";
{ <img
        className="BadgesListItem__avatar"
        src={this.props.badge.avatarUrl}
        alt={`${this.props.badge.firstName}
        ${this.props.badge.lastName}`}
        /> } 
```

## Implementación de gravatar sin componente

Primero se debe agregar la dependencia de **react-gravatar**

```
npm install --save react-gravatar
```

**badge**

Dentro del badge se cambiara el componente Gravatar por la implementación de react-gravatar que ya esta configurada para ser usada con el EMAIL.

```
import Gravatar from "react-gravatar";

		 <Gravatar
            className="Badge_avatar"
            email={this.props.email}
            alt="Avatar"
          />
```

**badgesList**

```jsx
import Gravatar from "react-gravatar";

<Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName}
          ${this.props.badge.lastName}`}
        />
```

# Manejando los estados de la petición durante el POST

De la misma manera en la que se manejan los estados cuando se solicitan datos, deben ser manejados cuando los datos son enviados.

Existe un tiempo entre que se da clic y los datos son enviados. Ese tiempo de espera es necesario visualizarlo. Igual hay que mostrar mensajes de error cuando no funcionan las cosas.

Básicamente lo que aremos es agregar el estado de carga y error. Cuando cargue aparecerá el PageLoading, mientras que el error se va a mandar por medio de las props al formulario para que este sea el encargado de notificar el error.

Se ocupa la propiedad **history.push()** para redireccionar a la pagina anterior es decir badges. 

```jsx
 state = {
    loading : false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      twitter: "",
      jobTitle: "",
    }
  }
  
  handleSubmit = async e => {
    // Funciona para detener una llamada
    e.preventDefault()
    this.setState( {loading: true, error: null })

    try {
      await api.badges.create(this.state.form)
      this.setState( {loading: false})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState( {loading: false, error: error })
    }
  }
  
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
      
       <div className="col-6">
              <BadgeForm 
              onChange={this.handleChange}
              onSubmit={this.handleSubmit} 
              formValues={this.state.form}
              error={this.state.error}  
              />
        </div>
  }
```

**badgesForm**

El operador && simplifica un **entonces**, por lo cual si existe un error entonces imprimiremos el mensaje.

```
{this.props.error && (
            <p className="text-danger"> {this.props.error.message} </p>
          )}
```

# Actualizando datos (PUT)

# UI Components y Container Components

En la programación es bueno separar las tareas en diferentes funciones y en React sucede lo mismo. Cuando un componente hace demasiado, probablemente es mejor dividirlo en dos.

Esta técnica de componentes presentacionales y componentes *container* es común, útil y hace parte de las buenas prácticas.

Los presentacionales solo tienen la vista, mientras que los container tienen state y manejan la logica, enviando el estado como prop hacia el presentacional.

**Los presentacionales son funciones cuyo unico parametro son las props.**

```jsx
function BadgeDetails(props) {

}
```

# Portales

Hay momentos en los que queremos renderizar un modal, un *tooltip*, etc. Esto puede volverse algo complicado ya sea por la presencia de un *z-index* o un *overflow hidden*.

En estos casos lo ideal será renderizar en un nodo completamente aparte y para esto React tiene una herramienta llamada **Portales** que funcionan parecido a ReactDOM.render; se les dice qué se desea renderizar y dónde, con la diferencia de que ese dónde puede ser fuera de la aplicación.

# Modales

La técnica de usar componentes genéricos para crear uno nuevo especializado se llama **composición** y es una herramienta que todo buen programador debe saber utilizar.

# Hooks

Las funciones no tienen un estado propio que manejar como ciclos de vida a los que deben suscribirse, mientras tanto las clases sí cuentan con ello.

React tiene un feature llamado **Hooks** que permite que las funciones también tengan *features* que solamente tienen las clases.

**Hooks:** Permiten a los componentes funcionales tener características que solo las clases tienen:

- **useState:** Para manejo de estado.
- **useEffect:** Para suscribir el componente a su ciclo de vida.
- **useReducer:** Ejecutar un efecto basado en una acción.

**Custom Hooks:** Usamos los *hooks* fundamentales para crear nuevos *hooks custom*. Estos *hooks* irán en su propia función y su nombre comenzará con la palabra *use*. Otra de sus características es que no pueden ser ejecutados condicionalmente (*if*).

- *useState* regresa un arreglo de dos argumentos.