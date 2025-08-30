gdjs._1052_1077_1085_1102_321Code = {};
gdjs._1052_1077_1085_1102_321Code.localVariables = [];
gdjs._1052_1077_1085_1102_321Code.GDNewTextObjects1= [];
gdjs._1052_1077_1085_1102_321Code.GDNewTextObjects2= [];
gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects1= [];
gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects2= [];
gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs._1052_1077_1085_1102_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Меню 2", false);
}}

}


};

gdjs._1052_1077_1085_1102_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1052_1077_1085_1102_321Code.GDNewTextObjects1.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDNewTextObjects2.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects1.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects2.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs._1052_1077_1085_1102_321Code.eventsList0(runtimeScene);
gdjs._1052_1077_1085_1102_321Code.GDNewTextObjects1.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDNewTextObjects2.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects1.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDNewTextInputObjects2.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs._1052_1077_1085_1102_321Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['_1052_1077_1085_1102_321Code'] = gdjs._1052_1077_1085_1102_321Code;
