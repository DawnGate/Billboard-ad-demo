import { LayerGroup, LayersControl } from "react-leaflet";

export const MapLayers = () => {
  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="Show billboards path">
        <LayerGroup></LayerGroup>
      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="Hide active billboards">
        <LayerGroup></LayerGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};
