gdjs._1052_1077_1085_1102_322Code = {};
gdjs._1052_1077_1085_1102_322Code.localVariables = [];
gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects1= [];
gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects2= [];
gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs._1052_1077_1085_1102_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects1);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Value", (( gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().get("Error"));
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), "Pay", "on", runtimeScene.getScene().getVariables().get("Error"));
}}

}


};

gdjs._1052_1077_1085_1102_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects1.length = 0;
gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects2.length = 0;
gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs._1052_1077_1085_1102_322Code.eventsList0(runtimeScene);
gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects1.length = 0;
gdjs._1052_1077_1085_1102_322Code.GDNewTextInputObjects2.length = 0;
gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs._1052_1077_1085_1102_322Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['_1052_1077_1085_1102_322Code'] = gdjs._1052_1077_1085_1102_322Code;
