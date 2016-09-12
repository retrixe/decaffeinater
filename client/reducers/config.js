let configy = {
  command: null,
  time: 0
}
export default function(action) {
  switch(action.type) {
    case 'CONFIG_CHANGE_COMMAND':
    configy.command = action.payload;
    break;

    case 'CONFIG_CHANGE_HOURS':
    configy.time += action.payload*3600;
    break;

    case 'CONFIG_CHANGE_COMMAND':
    configy.time += action.payload*60;
    break;
  }
  return configy;
};
