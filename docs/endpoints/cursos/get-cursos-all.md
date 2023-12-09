# Endpoint: `GET /cursos`

Permite obtener todos los registro la tabla.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla unicamente para traer todos sus registros.


## Ejemplo de Solicitud
```http
GET /cursos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_curso": 1,
        "fk_id_categoria": 1,
        "nombre": "Programación Avanzada",
        "aptitud": "Desarrollo avanzado en varios lenguajes"
    },
    {
        "id_curso": 2,
        "fk_id_categoria": 2,
        "nombre": "Diseño Web",
        "aptitud": "Creación de interfaces atractivas"
    },
    {
        "id_curso": 3,
        "fk_id_categoria": 3,
        "nombre": "Gestión de Proyectos",
        "aptitud": "Habilidades para la administración de proyectos"
    }
]
```

## Respuestas de Errores Posibles
- Código 400 Not Found:

    ```
    No se puede OBTENER /cursos
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