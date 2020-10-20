import noImagePng from "@/assets/images/no-image.png";
import loaderGif from "@/assets/images/loading.gif";

export default {
  bind(el, binding) {
    try {
      const { value } = binding;
      const loader = loaderGif;
      const noImage = noImagePng;
      const img = new Image();
      let loading = loader;
      let error = noImage;
      let original = el.src;

      if (value instanceof Object) {
        loading = value.imageLoader || loader;
        error = value.noImage || noImage;
      }
      img.src = original;
      el.src = loading;
      img.onload = () => {
        el.src = original;
      };
      img.onerror = () => {
        el.src = error;
      };
    } catch (e) {
      console.log(e);
    }
  }
};
