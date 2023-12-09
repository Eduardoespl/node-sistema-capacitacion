# Endpoint: `GET puestos`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /puestos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_puesto": 1,
        "nombre": "Desarrollador",
        "descripcion": "Responsable de desarrollo de software"
    },
    {
        "id_puesto": 2,
        "nombre": "Diseñador",
        "descripcion": "Encargado de diseño gráfico"
    },
    {
        "id_puesto": 3,
        "nombre": "Gerente",
        "descripcion": "Responsable de la administración del equipo"
    }
]
```

## Respuestas de Errores Posibles
- Código 400 Not Found:

    ```
    No se puede OBTENER /puestos
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