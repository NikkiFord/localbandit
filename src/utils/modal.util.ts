import { ModalAPI } from "../../interfaces";

const modalAPIs = new Set<ModalAPI>();

export default {
  _registerModal(modalApi: ModalAPI): () => void {
    if (modalAPIs.has(modalApi)) {
      throw new Error(`Modal "${modalApi.name}" already registered.`);
    }
    modalAPIs.add(modalApi);
    return () => modalAPIs.delete(modalApi);
  },

  open(name, options?) {
    let modalApi;
    modalAPIs.forEach((api) => {
      if (api.name === name) modalApi = api;
    });

    if (!modalApi) {
      throw new Error(`No modal "${name}" registered with modal service.`);
    }

    return new Promise((resolve, reject) => {
      modalApi.open(options);
      modalApi.close = (err) => {
        modalApi.cleanup();
        if (err) return reject(err);
        resolve();
      };
    });
  },

  close(name, err?) {
    let modalApi;
    modalAPIs.forEach((api) => {
      if (api.name === name) modalApi = api;
    });

    if (!modalApi) {
      throw new Error(`No modal "${name}" registered with modal service.`);
    }

    return modalApi.close(err);
  }
};
