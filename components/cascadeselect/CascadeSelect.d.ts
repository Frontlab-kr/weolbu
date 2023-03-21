/**
 *
 * CascadeSelect is a form component to select a value from a nested structure of options.
 *
 * [Live Demo](https://www.primevue.org/cascadeselect/)
 *
 * @module cascadeselect
 *
 */
import { HTMLAttributes, InputHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom change event
 * @see {@link CascadeSelectEmits.change}
 */
export interface CascadeSelectChangeEvent {
    /**
     * Original event.
     */
    originalEvent: Event;
    /**
     * Selected option value.
     */
    value: any;
}

/**
 * @see {@link CascadeSelectEmits.change}
 * @extends CascadeSelectChangeEvent
 */
export interface CascadeSelectGroupChangeEvent extends CascadeSelectChangeEvent {}

/**
 * Defines valid properties in CascadeSelect component.
 */
export interface CascadeSelectProps {
    /**
     * Value of the component.
     */
    modelValue?: any | undefined;
    /**
     * An array of selectitems to display as the available options.
     */
    options?: any[] | undefined;
    /**
     * Property name or getter function to use as the label of an option.
     */
    optionLabel?: string | ((data: any) => string) | undefined;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     */
    optionValue?: string | ((data: any) => any) | undefined;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     */
    optionDisabled?: string | ((data: any) => boolean) | undefined;
    /**
     * Property name or getter function to use as the label of an option group.
     */
    optionGroupLabel?: string | ((data: any) => string) | undefined;
    /**
     * Property name or getter function to retrieve the items of a group.
     */
    optionGroupChildren?: string[] | string | ((data: any) => any[]) | undefined;
    /**
     * Default text to display when no option is selected.
     */
    placeholder?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: object | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: string | object | undefined;
    /**
     * Uses to pass all properties of the HTMLDivElement to the overlay panel inside the component.
     */
    panelProps?: HTMLAttributes | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * Whether the dropdown is in loading state.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in the dropdown.
     * @defaultValue pi pi-chevron-down
     */
    dropdownIcon?: string | undefined;
    /**
     * Icon to display in loading state.
     * @defaultValue pi pi-spinner pi-spin
     */
    loadingIcon?: string | undefined;
    /**
     * Icon to display in the option group.
     * @defaultValue pi pi-angle-right
     */
    optionGroupIcon?: string | undefined;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @defaultValue true
     */
    autoOptionFocus?: boolean | undefined;
    /**
     * When enabled, the focused option is selected/opened.
     * @defaultValue false
     */
    selectOnFocus?: boolean | undefined;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     */
    searchLocale?: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.
     * @defaultValue '{0} results are available'
     */
    searchMessage?: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.
     * @defaultValue '{0} items selected'
     */
    selectionMessage?: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No selected item
     */
    emptySelectionMessage?: string | undefined;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No results found
     */
    emptySearchMessage?: string | undefined;
    /**
     * Text to be displayed when there are no options available. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No available options
     */
    emptyMessage?: string | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
}

/**
 * Defines valid slots in CascadeSelect component.
 */
export interface CascadeSelectSlots {
    /**
     * Custom content for each option.
     * @param {Object} scope - option slot's params.
     */
    option(scope: {
        /**
         * Option instance
         */
        option: any;
    }): VNode[];
    /**
     * Custom value template.
     * @param {CascadeSelectValueSlot} scope - value slot's params.
     */
    value(scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Placeholder text to show
         */
        placeholder: string;
    }): VNode[];
    /**
     * Custom indicator template.
     */
    indicator(): VNode[];
}

/**
 * Defines valid emits in CascadeSelect component.
 */
export interface CascadeSelectEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on value change.
     * @param { CascadeSelectChangeEvent } event - Custom change event.
     */
    change(event: CascadeSelectChangeEvent): void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
    /**
     * Callback to invoke on click.
     * @param { Event } event - Browser event.
     */
    click(event: Event): void;
    /**
     * Callback to invoke when a group changes.
     * @param { CascadeSelectGroupChangeEvent } event - Custom change event.
     */
    'group-change'(event: CascadeSelectGroupChangeEvent): void;
    /**
     * Callback to invoke before the overlay is shown.
     */
    'before-show'(): void;
    /**
     * Callback to invoke before the overlay is hidden.
     */
    'before-hide'(): void;
    /**
     * Callback to invoke when the overlay is shown.
     */
    show(): void;
    /**
     * Callback to invoke when the overlay is hidden.
     */
    hide(): void;
}

/**
 * **PrimeVue - CascadeSelect**
 *
 * _CascadeSelect is a form component to select a value from a nested structure of options._
 *
 * [Live Demo](https://www.primevue.org/cascadeselect/)
 * --- ---
 * ![PrimeVue(https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class CascadeSelect extends ClassComponent<CascadeSelectProps, CascadeSelectSlots, CascadeSelectEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        CascadeSelect: GlobalComponentConstructor<CascadeSelect>;
    }
}

export default CascadeSelect;
