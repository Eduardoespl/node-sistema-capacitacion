# Endpoint: `PATCH /cursos/{id}`

Permite modificar los valores de un registro existente, al incluir la tabla donde esta el registro a modificar y el identificador unico del registro.


## Parámetros de URL
- `{nombre_tabla}` (obligatorio): Se requiere especificamente poner el nombre la tabla.
- `{id}` (obligatorio): Identificador único del registro que se modificar.

## Ejemplo de Solicitud
```http
PATCH /cursos/3
```

## Valor de entrada de Solicitud
```json
    {
        "fk_id_categoria": 3,
        "nombre": "Trabajo en Equipo",
        "aptitud": "Habilidades para el manejo de equipos de trabajo"
    }
```

## Respuesta Exitosa (Código 201 OK)
```json
{ 
    "message": "Successfull partial update"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

    ```json
   { 
        "errno": 400, 
        "error": "Bad Request" 
    }
    ```

    - Código 404 Bad Request:

    ```json
        { 
            "errno": 404, 
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

- Asegurate de incluir el nombre correcto de la tabla en la solicitud para modificar un nuevo registro satisfactoriamente y un identificador unico existente.