import { upgradeMap } from "./maps.js";
import { setAttribute } from "./utils.js";
import "./types.js";

const PROPERTY_ONLY = Symbol("PROPERTY_ONLY");

export const aom: Record<keyof ARIAMixin, string | symbol> = {
  ariaActiveDescendantElement: PROPERTY_ONLY,
  ariaAtomic: "aria-atomic",
  ariaAutoComplete: "aria-autocomplete",
  ariaBrailleLabel: "aria-braillelabel",
  ariaBrailleRoleDescription: "aria-brailleroledescription",
  ariaBusy: "aria-busy",
  ariaChecked: "aria-checked",
  ariaColCount: "aria-colcount",
  ariaColIndex: "aria-colindex",
  ariaColIndexText: "aria-colindextext",
  ariaColSpan: "aria-colspan",
  ariaControlsElements: PROPERTY_ONLY,
  ariaCurrent: "aria-current",
  ariaDescribedByElements: PROPERTY_ONLY,
  ariaDescription: "aria-description",
  ariaDetailsElements: PROPERTY_ONLY,
  ariaDisabled: "aria-disabled",
  ariaErrorMessageElements: PROPERTY_ONLY,
  ariaExpanded: "aria-expanded",
  ariaFlowToElements: PROPERTY_ONLY,
  ariaHasPopup: "aria-haspopup",
  ariaHidden: "aria-hidden",
  ariaInvalid: "aria-invalid",
  ariaKeyShortcuts: "aria-keyshortcuts",
  ariaLabel: "aria-label",
  ariaLabelledByElements: PROPERTY_ONLY,
  ariaLevel: "aria-level",
  ariaLive: "aria-live",
  ariaModal: "aria-modal",
  ariaMultiLine: "aria-multiline",
  ariaMultiSelectable: "aria-multiselectable",
  ariaOrientation: "aria-orientation",
  ariaOwnsElements: PROPERTY_ONLY,
  ariaPlaceholder: "aria-placeholder",
  ariaPosInSet: "aria-posinset",
  ariaPressed: "aria-pressed",
  ariaReadOnly: "aria-readonly",
  ariaRelevant: "aria-relevant",
  ariaRequired: "aria-required",
  ariaRoleDescription: "aria-roledescription",
  ariaRowCount: "aria-rowcount",
  ariaRowIndex: "aria-rowindex",
  ariaRowIndexText: "aria-rowindextext",
  ariaRowSpan: "aria-rowspan",
  ariaSelected: "aria-selected",
  ariaSetSize: "aria-setsize",
  ariaSort: "aria-sort",
  ariaValueMax: "aria-valuemax",
  ariaValueMin: "aria-valuemin",
  ariaValueNow: "aria-valuenow",
  ariaValueText: "aria-valuetext",
  role: "role",
};

export const initAom = (
  ref: FormAssociatedCustomElement,
  internals: ElementInternals
) => {
  for (let key in aom) {
    internals[key] = null;

    let closureValue = null;
    const attributeName = aom[key];
    Object.defineProperty(internals, key, {
      get() {
        return closureValue;
      },
      set(value) {
        closureValue = value;
        if (ref.isConnected) {
          if (attributeName === PROPERTY_ONLY) {
            ref[attributeName] = value;
          } else {
            setAttribute(ref, attributeName, value);
          }
        } else {
          upgradeMap.set(ref, internals);
        }
      },
    });
  }
};
