
showMessage = true;
showDebug=false;
branch('FAA:' + appTypeArray[0] + '/*/*/*');
branch('FAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('FAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('FAA:' + appTypeString);

