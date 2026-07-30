# 👁️ Control Tratamiento Ocular

> PWA para el control de medicación post-cirugía de cataratas.

![Version](https://img.shields.io/badge/versión-3.1-brightgreen)
![PWA](https://img.shields.io/badge/PWA-✅-blue)
![License](https://img.shields.io/badge/licencia-MIT-orange)

---

## 📱 ¿Qué es?

Una **aplicación web progresiva (PWA)** diseñada para que una persona mayor pueda gestionar su tratamiento ocular post-operatorio de forma sencilla. Sin cuentas, sin instalaciones complicadas, sin letra pequeña.

**Público objetivo:** Mi padre, 80 años, después de una operación de cataratas.

### Características

- ✅ **Interfaz adaptada** — Botones grandes, colores contrastados, fuente clara
- ⏰ **Panel de estado** — Te dice al instante si toca ponerse algo o estás al día
- 📅 **Navegación por días** — Puedes ver días pasados o futuros del tratamiento
- 🗓️ **Fases del tratamiento** — El plan de medicación cambia automáticamente según la fase
- 📢 **Notificaciones** — Te avisa cuando toca medicación (incluso con la app cerrada)
- 🔊 **Sonido al marcar** — Feedback auditivo al marcar/desmarcar dosis
- 📱 **PWA** — Funciona offline, se puede instalar en el móvil como una app normal
- 🔄 **Actualizaciones automáticas** — Detecta cambios y ofrece actualizar
- 🩺 **Revisiones médicas** — Caja de citas programadas visibles siempre (mismo estilo que recordatorios)

## 🏗️ Fases del tratamiento

| Fase | Período | Medicamentos |
|------|---------|-------------|
| — | **Todas las fases** | OFTALMOLOSA |
| FASE 1 | 30 jul – 2 ago | LEPHANET, YELLOX, TOBRADEX (6×) |
| FASE 2 | 3 – 4 ago | ⬇️ TOBRADEX baja |
| FASE 3 | 5 – 7 ago | 🆕 THEALOZ DUO |
| FASE 4 | 8 – 12 ago | ⬇️ TOBRADEX baja |
| FASE 5 | 13 – 17 ago | ⬇️ TOBRADEX baja |
| FASE 6 | 18 – 22 ago | ⬇️ TOBRADEX baja |
| FASE 7 | 23 – 29 ago | ✖️ TOBRADEX desaparece |
| FASE 8 | 30 ago – 29 sep | ✖️ YELLOX desaparece |
| FASE 9 | 30 sep – 5 oct | ✖️ LEPHANET desaparece (solo THEALOZ DUO) |

## 🚀 Cómo usar

1. Abre **https://hrodres.github.io/cataratas/** en el navegador del móvil
2. Toca **Compartir → Añadir a pantalla de inicio** (o ⋮ → Añadir)
3. Ya tienes la app instalada

## 🛠️ Desarrollo

```
git clone https://github.com/hrodres/cataratas
cd cataratas
# Editar index.html
# Si tocas service-worker.js → ya se detecta solo
# Si solo tocas index.html → subir versión en service-worker.js
```

## 📄 Licencia

MIT — haz lo que quieras con esto.
