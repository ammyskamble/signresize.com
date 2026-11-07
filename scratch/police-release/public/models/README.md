# Portrait segmentation model

`selfie-multiclass-256-v1.tflite` is the pinned version 1 of Google's MediaPipe Selfie Multiclass model.

Source: https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/1/selfie_multiclass_256x256.tflite

Model documentation and category order: https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter#multi-class_selfie_segmentation_model

The runtime is `@mediapipe/tasks-vision` 0.10.32 (Apache-2.0), installed through npm and copied into `public/vendor` by `scripts/prepare-portrait-assets.mjs` before development and builds. The worker and model are requested only after the visitor selects background removal. Images are processed on the visitor's device.

This is portrait segmentation, not a professional matting service. Fine hair, transparent items, occlusion and busy backgrounds may leave imperfect edges. The interface preserves the original and offers undo; it does not certify exam acceptance.
