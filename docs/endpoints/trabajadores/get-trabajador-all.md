# Endpoint: `GET trabajador`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /trabajador
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_trabajador": 1,
        "nombre": "Juan Perez",
        "fk_id_puesto": 1,
        "cursos_completos": 2
    },
    {
        "id_trabajador": 2,
        "nombre": "Maria Rodriguez",
        "fk_id_puesto": 2,
        "cursos_completos": 1
    },
    {
        "id_trabajador": 3,
        "nombre": "Carlos Sanchez",
        "fk_id_puesto": 3,
        "cursos_completos": 3
    }
]
```

## Respuestas de Errores Posibles
- Código 400 Not Found:

    ```
    No se puede OBTENER /trabajador
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