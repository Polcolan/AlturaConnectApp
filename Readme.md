# AlturaConnectAPP

## Descripción

AlturaConnectAPP es una aplicación web diseñada para gestionar y aprobar permisos de trabajo en altura y otros formularios relacionados con la seguridad en el trabajo. La aplicación está conectada a una base de datos Firebase para almacenar y gestionar la información de los trabajadores autorizados, los formularios de trabajo en altura y los permisos ATS (Análisis de Trabajo Seguro).

## Funcionalidades

1. **Registro de Usuarios:**
   - Los usuarios pueden registrarse en la aplicación proporcionando su información personal y una contraseña que debe cumplir con los requisitos de seguridad (mínimo 8 caracteres, al menos una mayúscula y un número).

2. **Visualización de Trabajadores Autorizados:**
   - Los datos de los trabajadores autorizados se pueden visualizar desde la base de datos Firebase, con enlaces que permiten abrir documentos relacionados en una nueva pestaña.

3. **Gestión de Formularios de Trabajo en Altura y ATS:**
   - Los formularios de trabajo en altura y ATS se pueden crear, visualizar y gestionar. Estos formularios incluyen detalles como la ubicación de la actividad, la fecha y hora de inicio y finalización, los elementos de protección personal, y la identificación de peligros.

4. **Aprobación de Formularios:**
   - Los formularios de trabajo en altura y ATS pueden ser aprobados o desaprobados. Las tarjetas que representan estos formularios cambian de color para indicar su estado de aprobación.

5. **Relación entre Trabajadores y Usuarios Autorizados:**
   - Los trabajadores autorizados y los usuarios que pueden autorizar actividades son cargados desde la base de datos Firebase, permitiendo seleccionar personas específicas para las actividades registradas.

6. **Canvas para Firma Digital:**
   - Los usuarios pueden agregar su firma digital a través de un canvas interactivo. La firma se guarda en Firebase Storage y se almacena en la base de datos.

## Estructura del Proyecto

- **HTML Files:**
  - `index.html`: Página de inicio de la aplicación.
  - `visualizacionTrabajadorAutorizado.html`: Visualización de trabajadores autorizados.
  - `registro.html`: Formulario de registro de usuarios.
  - `cardTrabajadores.html`: Visualización de tarjetas de trabajadores.
  - `permisoTrabajoAltura.html`: Formulario para permisos de trabajo en altura.
  - `archivosGuardados.html`: Visualización de archivos guardados y pendientes de aprobación.

- **JavaScript Files:**
  - `visualizacionTrabajadorAutorizado.js`: Código para manejar la visualización de trabajadores autorizados.
  - `registro.js`: Código para manejar el registro de usuarios y la validación de contraseñas.
  - `cardsTrabajadores.js`: Código para manejar las tarjetas de trabajadores.
  - `permisoTrabajoAltura.js`: Código para manejar el formulario de permisos de trabajo en altura.
  - `aprobacionPendiente.js`: Código para manejar la aprobación y desaprobación de formularios.

- **Firebase Configuration:**
  - El proyecto está configurado para usar Firebase para la autenticación y almacenamiento de datos. Los detalles de configuración se encuentran en cada archivo JavaScript.

## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-repositorio/AlturaConnectAPP.git
