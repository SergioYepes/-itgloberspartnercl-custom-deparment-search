
# Custom Department Search

![custom-department-search](https://github.com/SergioYepes/Itgloberspartnercl-custom-deparment-search/blob/master/docs/componentImage.png)

Selected custom search by departments 

## Configuration
### Step 1 - Cloning the repository

[Clone](https://github.com/vtex-apps/react-app-template) the react-app-template repository to start with the basics of initial configuration, once on the github repository page; there is the option that says `Use this template`, to make a copy to our repository.

Then, access the repository directory using your terminal.

### Step 2 - Edit the Manifest.json

Once in the repository directory, it is time to edit the `manifest.json` file of the react app template.

Once you are in the file, you must replace the `vendor`, `name`, `version`, `title` and `description` values.

 `vendor` is the name of the partner account you are working on.
 `name` is the name of what your component is going to be called as dependency
 `version` the initial version you will start working with
 `title` title of the component which is not subject to how it will be declared as a dependency so it can be any title you like
 `description` small description of what the component is for.
 
Example:

```json
{
  "vendor": "partner",
  "name": "name-component",
  "version": "0.0.x",
  "title": "Titulo del Componente",
  "description": "Pequeña descripción para lo que sirve el componente",
  ...
}
```

### Step 3 - Configure the builder store

For the component to work correctly the builder store must be declared in the `manifest.json`. 

Example:

````json
{
  "builders": {
    ...
    "store": "0.x"
  },
  ...
}
````

After that you have to create a folder named store in the top folder of the component, that `store` folder will have a file named `interfaces.json`.

Example:

````json
{
  "name-component": { // The name that is declared in the manifest.json of the vtex app
    "component": "new-name", // The name of the component to be fed from.
    "render": "client" // This property is set if it is to be used only by the client
  }
}
````

### Step 4 - Declare necessary dependencies

In the `manifest.json` you must declare the dependencies that are going to be used in the desired component. 

Example:

````json
...
"dependencies": {
  "vtex.dependencies": "0.x",
  "vtex.dependencies": "0.x"
},
...
````

### Step 5 - Edit package.json

The first `package.json` is the global one, it is next to the `manifest.json`, let's change its `version` and `name`.
 
Example:

```json
{
  "version": "0.0.x",
  "name": "name-component",
  ...
}
```

And repeat the same process with the `package.json` inside the react folder.

### Step 6 - Install react dependencies

For this step you must enter to the react folder, and once there you must execute in your console the command
```json
partner-name-componet/react> yarn
```
to install all the necessary dependencies.

### Step 7 - Create component

In the react folder you must create the file you are going to work with, example: `name.tsx`, then create your component folder and start development

### Step 8 - Run a store preview

Then the time has come to upload all the changes you made in your local files to the platform. For that, use the `vtex link` command.

If the process runs without any errors, the following message will be displayed: `Application linked successfully`. Next, run the `vtex browser` command to open a browser window with your linked store.

This will allow you to see the changes applied in real time, across the account and workspace you are working in.

## Dependencies

1. "vtex.css-handles"
2. "vtex.store-graphql"
3. "vtex.store-components"

## Contributors
1. Sergio Yepes Gualteros
