CMS.initPageUnbind = function() {
	CMS.updateConfigU();
};
CMS.initPage = function() {
	var details = new Array();
	details[0] = 'genSettingsForm'; //active form id
	details[1] = thisURL + thisModule + "/process/upd-settings/"; //post url 
	details[2] = 'Franchising email settings was successfully updated.'; //success message 
	CMS.updateConfig(details);
};