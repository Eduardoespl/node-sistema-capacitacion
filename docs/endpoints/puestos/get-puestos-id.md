# Endpoint: `GET /puestos/{id}`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla.
- `{id}` (obligatorio): Identificador único del registro que se desea recuperar.


## Ejemplo de Solicitud
```http
GET /puestos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_puesto": 1,
    "nombre": "Desarrollador",
    "descripcion": "Responsable de desarrollo de software"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

    ```json
    {
        "error": "Not found"
    }
    ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información solicitada.