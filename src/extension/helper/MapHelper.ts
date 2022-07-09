import { GraphicMode, GraphicModeValues } from '../../types/enums/GraphicMode';
import { BridgeMap, buckyMaps, stratusMaps } from '../../helpers/maps';

export class MapHelper {
    static getMaps(mode: GraphicModeValues): BridgeMap[] {
        return mode === GraphicMode.STRATUS ? stratusMaps : buckyMaps;
    }

    static getMode(mapName: string, mode: GraphicModeValues): string | undefined {
        return this.getMaps(mode).find(map => map.name === mapName)?.mode;
    }
}
