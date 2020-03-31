import type { ShapeType } from "../../../../Enums/ShapeType";
import type { IImageShape } from "./IImageShape";
import type { ICharacterShape } from "./ICharacterShape";
import type { IPolygonShape } from "./IPolygonShape";
import type { IStroke } from "../IStroke";
import type { IOptionLoader } from "../../IOptionLoader";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { CustomShape } from "../../../../Types/CustomShape";

export interface IShape extends IOptionLoader<IShape> {
    type: SingleOrMultiple<ShapeType | string>;

    /**
     * @deprecated this property was moved to particles section
     */
    stroke: SingleOrMultiple<IStroke>;

    polygon: SingleOrMultiple<IPolygonShape>;
    character: SingleOrMultiple<ICharacterShape>;
    image: SingleOrMultiple<IImageShape>;
    custom: CustomShape;
}
