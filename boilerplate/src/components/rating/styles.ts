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

    /* .star-rating input:read-only ~ label {
      pointer-events: none;
    } */

    /* .star-input:focus-visible {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 2px;
      border-radius: 15px;
    } */

    #rating-1:focus ~ .star-1 {
      border: 2px solid darkblue;
      border-radius: 25%;
    }

    #rating-2:focus ~ .star-2 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 2px;
      border-radius: 25%;
    }

    #rating-3:focus ~ .star-3 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 2px;
      border-radius: 25%;
    }
    #rating-4:focus ~ .star-4 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 2px;
      border-radius: 25%;
    }

    #rating-5:focus ~ .star-5 {
      border-color: var(--star-state-focus);
      border-style: solid;
      border-width: 2px;
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

    /* .rating {
      display: flex;
      flex-direction: row-reverse;
    }

    .rating > input:not(:checked) ~ label:hover,
    .rating > input:not(:checked) ~ label:hover ~ label {
      --primary-star: #ffd82c;
    }

    input.rating-input {
      opacity: 0; // This is done to hide the radio button from the user, but they still exist in the dom.
      position: absolute; // This is to place them next to the labels, so it looks like they done take up any space.
      margin: 0 !important;
    }

    .rating-label {
      display: flex;
      color: var(--primary-star);
      position: relative;
      cursor: pointer;
    }

    #star-one:focus ~ .rating-label.star-one {
      border: 2px solid blue;
      border-radius: 25%;
    }

    #star-two:focus ~ .rating-label.star-two {
      border: 2px solid blue;
      border-radius: 25%;
    }

    #star-three:focus ~ .rating-label.star-three {
      border: 2px solid blue;
      border-radius: 25%;
    }

    #star-four:focus ~ .rating-label.star-four {
      border: 2px solid blue;
      border-radius: 25%;
    }

    #star-five:focus ~ .rating-label.star-five {
      border: 2px solid blue;
      border-radius: 25%;
    }

    input.rating-input:checked ~ .rating-label {
      --primary-star: #e7a83b;
    }

    input.rating-input:disabled ~ .rating-label {
      --primary-star: #b8b8b7;
      pointer-events: none;
      cursor: auto;
    }

    .interactive ~ .rating-label {
      pointer-events: auto;
    }

    .readonly ~ .rating-label {
      pointer-events: none;
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
    } */
  `,
];
