# Endpoint: `GET vacantes`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /vacantes
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_vacante": 1,
        "fk_id_puesto": 1,
        "fk_id_curso": 1
    },
    {
        "id_vacante": 2,
        "fk_id_puesto": 2,
        "fk_id_curso": 2
    },
    {
        "id_vacante": 3,
        "fk_id_puesto": 3,
        "fk_id_curso": 3
    }
]
```

## Respuestas de Errores Posibles
- Código 400 Not Found:

    ```
    No se puede OBTENER /vacantes
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