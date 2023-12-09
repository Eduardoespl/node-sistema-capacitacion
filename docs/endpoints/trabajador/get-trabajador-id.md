# Endpoint: `GET /trabajador/{id}`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla.
- `{id}` (obligatorio): Identificador único del registro que se desea recuperar.


## Ejemplo de Solicitud
```http
GET /trabajador/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_trabajador": 1,
    "nombre": "Juan Perez",
    "fk_id_puesto": 1,
    "cursos_completos": 2
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