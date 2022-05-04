// A function that calculates a cone’s volume and total surface area by given height and radius of the base.

function cone(radiusCone, heightCone){
    let volumeCone = (1/3) * Math.PI * Math.pow(radiusCone, 2) * heightCone;
    let slantHeight = Math.sqrt(Math.pow(radiusCone, 2) + Math.pow(heightCone, 2));
    let lateralSurfaceArea = Math.PI * radiusCone * slantHeight;
    let baseSurfaceArea = Math.PI * Math.pow(radiusCone, 2);
    let areaCone1 = lateralSurfaceArea + baseSurfaceArea;
    let areavone2 = Math.PI * radiusCone * (slantHeight + radiusCone);
    let totalSurfaceArea = Math.PI * radiusCone * (radiusCone + slantHeight);
    console.log(`volume = ${volumeCone.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
