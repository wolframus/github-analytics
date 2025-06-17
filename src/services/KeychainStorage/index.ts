import * as Keychain from 'react-native-keychain';

type Keys = 'token';

class KeychainStorage {
  async save(key: Keys, value: string) {
    return await Keychain.setGenericPassword(key, value, { service: key });
  }

  async get(service: Keys) {
    const response = await Keychain.getGenericPassword({ service });
    return typeof response === 'boolean' ? response : response.password;
  }

  async remove(service: Keys) {
    return await Keychain.resetGenericPassword({ service });
  }
}

export default new KeychainStorage();
