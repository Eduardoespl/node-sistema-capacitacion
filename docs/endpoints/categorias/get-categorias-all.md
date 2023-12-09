# Endpoint: `GET /categorias`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /carreras
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_categoria": 1,
        "nombre": "Desarrollo"
    },
    {
        "id_categoria": 2,
        "nombre": "Diseño"
    },
    {
        "id_categoria": 3,
        "nombre": "Administración"
    }
]
```

## Respuestas de Errores Posibles
- Código 400 Not Found:

    ```
    No se puede OBTENER /carrera
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

- Asegurate de incluir el nombre correcto de la tabla en la solicitud para obtener la información solicitada.