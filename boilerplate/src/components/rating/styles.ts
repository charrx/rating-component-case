import { css } from "lit";

export const styles = [
  css`
    .star-rating input {
      opacity: 0;
      position: fixed;
    }

    .star-rating {
      display: flex;
    }

    .star-rating label {
      padding: 10px;
      float: right;
      color: var(--star-primay-color);
    }

    .star-rating input:not(:checked) ~ label:hover,
    .star-rating input:not(:checked) ~ label:hover ~ label {
      color: var(--star-action-hover);
    }

    .star-rating input:checked ~ label {
      color: var(--star-state-checked);
    }

    .star-rating input:disabled ~ label {
      color: var(--star-state-disabled);
      pointer-events: none;
      cursor: auto;
    }

    .star-rating input.readonly ~ label {
      pointer-events: none;
    }

    #rating-1:focus ~ .star-1 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 1px;
      border-radius: 25%;
    }

    #rating-2:focus ~ .star-2 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 1px;
      border-radius: 25%;
    }

    #rating-3:focus ~ .star-3 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 1px;
      border-radius: 25%;
    }
    #rating-4:focus ~ .star-4 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 1px;
      border-radius: 25%;
    }

    #rating-5:focus ~ .star-5 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 1px;
      border-radius: 25%;
    }

    .small > svg {
      width: var(--star-size-small);
      height: var(--star-size-small);
    }

    .medium > svg {
      width: var(--star-size-medium);
      height: var(--star-size-medium);
    }

    .large > svg {
      width: var(--star-size-large);
      height: var(--star-size-large);
    }
  `,
];
