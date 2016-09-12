export function changeConfig(newConfig, typeOfChange) {
  let typeAction = 'CONFIG_CHANGE_' + typeOfChange;
  return {
    type: typeAction,
    payload: newConfig
  }
};
