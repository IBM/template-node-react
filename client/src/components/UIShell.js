import React, { Component } from "react";
import UIShellBody from "./UIShellBody";

class UIShell extends Component {
  renderLeftNavItemEven = label => {
    return (
      <li class="bx--side-nav__item ">
        <a class="bx--side-nav__link" href="javascript:void(0)">
          <div class="bx--side-nav__icon bx--side-nav__icon--small">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
            </svg>
          </div>
          <span class="bx--side-nav__link-text">{label}</span>
        </a>
      </li>
    );
  };
  renderLeftNavItemOdd = label => {
    return (
      <li class="bx--side-nav__item bx--side-nav__item--active">
        <a
          class="bx--side-nav__link"
          href="javascript:void(0)"
          aria-current="page"
        >
          <div class="bx--side-nav__icon bx--side-nav__icon--small">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
            </svg>
          </div>
          <span class="bx--side-nav__link-text">{label}</span>
        </a>
      </li>
    );
  };

  render() {
    return (
      <div>
        <header
          class="bx--header"
          role="banner"
          aria-label="IBM Platform Name"
          data-header
        >
          <a class="bx--skip-to-content" href="#main-content" tabindex="0">
            Skip to main content
          </a>
          <button
            class="bx--header__menu-trigger bx--header__action"
            aria-label="Open menu"
            title="Open menu"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M4 6h24v2H4zm0 18h24v2H4zm0-9h24v2H4z" />
            </svg>
          </button>
          <a class="bx--header__name" href="#" title="">
            <span class="bx--header__name--prefix">IBM &nbsp;</span>
            Cloud Garage Catalyst
          </a>

          <div class="bx--header__global">
            <button
              class="bx--header__action"
              aria-label="Action 1 "
              title="Action 1"
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
              </svg>
            </button>
            <button
              class="bx--header__action"
              aria-label="Action 2 "
              title="Action 2"
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
              </svg>
            </button>
            <button
              class="bx--header__action"
              aria-label="Action 3 "
              title="Action 3"
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
              </svg>
            </button>
            <button
              class="bx--header__action"
              aria-label="Action 4 "
              title="Action 4"
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
              </svg>
            </button>
          </div>
        </header>
        <aside class="bx--side-nav" data-side-nav>
          <nav
            class="bx--side-nav__navigation"
            role="navigation"
            aria-label="Side navigation"
          >
            <header class="bx--side-nav__header">
              <div class="bx--side-nav__icon">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
                </svg>
              </div>
              <div class="bx--side-nav__details">
                <h2 class="bx--side-nav__title" title="[L1 name here]">
                  12 Design Patterns
                </h2>
              </div>
            </header>
            <ul class="bx--side-nav__items">
              {this.renderLeftNavItemEven("Display Form")}
              {this.renderLeftNavItemOdd("Validating Form")}
              {this.renderLeftNavItemEven("Update Form")}
              {this.renderLeftNavItemOdd("Validating Form Wizard")}
              {this.renderLeftNavItemEven("Simple List")}
              {this.renderLeftNavItemOdd("Table List")}
              {this.renderLeftNavItemEven("List to List")}
              {this.renderLeftNavItemOdd("Linked List")}
              {this.renderLeftNavItemEven("Master Detail")}
              {this.renderLeftNavItemOdd("Create, Read, Update, Delete")}
              {this.renderLeftNavItemEven("Search List")}
              {this.renderLeftNavItemOdd("Search Form")}
            </ul>
            <footer class="bx--side-nav__footer">
              <button
                class="bx--side-nav__toggle"
                role="button"
                title="Close the side navigation menu"
              >
                <div class="bx--side-nav__icon">
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M22 16L12 26l-1.414-1.414L19.172 16l-8.586-8.586L12 6l10 10z" />
                  </svg>
                </div>
                <span class="bx--assistive-text">
                  Toggle the expansion state of the navigation
                </span>
              </button>
            </footer>
          </nav>
        </aside>
        <aside class="bx--panel--overlay">
          <div class="bx--product-switcher">
            <div class="bx--product-switcher__search">
              <div class="bx--form-item">
                <div
                  data-search
                  class="bx--search bx--search--sm bx--search--shell"
                  role="search"
                >
                  <label
                    id="search-input-label-1"
                    class="bx--label"
                    for="search__input-1"
                  >
                    Search
                  </label>
                  <input
                    class="bx--search-input"
                    type="text"
                    role="search"
                    id="search__input-1"
                    placeholder="Search all products"
                    aria-labelledby="search-input-label-2"
                  />
                  <svg
                    class="bx--search-magnifier"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.563 4.557-.707.708-4.563-4.558a6.5 6.5 0 1 1 .707-.707z"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <button
                    class="bx--search-close bx--search-close--hidden"
                    title="Clear search input"
                    aria-label="Clear search input"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 6.586L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414 8l2.122-2.121-1.415-1.415L8 6.586zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p class="bx--product-switcher__subheader">My Products</p>
            <ul class="bx--product-switcher__product-list">
              <li class="bx--product-list__item">
                <a class="bx--product-link" tabindex="0" href="#">
                  <div class="bx--product-switcher__icon">
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
                    </svg>
                  </div>
                  <span class="bx--product-link__name">My Product</span>
                </a>
                <div
                  data-overflow-menu
                  tabindex="0"
                  aria-label="Overflow menu description"
                  class="bx--overflow-menu"
                >
                  <svg width="3" height="15" viewBox="0 0 3 15">
                    <path d="M0 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0M0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0M0 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0" />
                  </svg>
                  <ul
                    class="bx--overflow-menu-options bx--overflow-menu--flip"
                    tabindex="-1"
                    data-floating-menu-direction="bottom"
                  >
                    <li class="bx--overflow-menu-options__option bx--overflow__item">
                      <button
                        class="bx--overflow-menu-options__btn"
                        title="Option 1"
                        data-floating-menu-primary-focus
                      >
                        Option 1
                      </button>
                    </li>
                    <li class="bx--overflow-menu-options__option">
                      <button class="bx--overflow-menu-options__btn">
                        Option 2
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="bx--product-list__item">
                <a class="bx--product-link" tabindex="0" href="#">
                  <div class="bx--product-switcher__icon">
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
                    </svg>
                  </div>
                  <span class="bx--product-link__name">My Product 2</span>
                </a>
                <div
                  data-overflow-menu
                  tabindex="0"
                  aria-label="Overflow menu description"
                  class="bx--overflow-menu"
                >
                  <svg width="3" height="15" viewBox="0 0 3 15">
                    <path d="M0 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0M0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0M0 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0" />
                  </svg>
                  <ul
                    class="bx--overflow-menu-options bx--overflow-menu--flip"
                    tabindex="-1"
                    data-floating-menu-direction="bottom"
                  >
                    <li class="bx--overflow-menu-options__option bx--overflow__item">
                      <button
                        class="bx--overflow-menu-options__btn"
                        title="Option 1"
                        data-floating-menu-primary-focus
                      >
                        Option 1
                      </button>
                    </li>
                    <li class="bx--overflow-menu-options__option">
                      <button class="bx--overflow-menu-options__btn">
                        Option 2
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div class="bx--product-switcher__item">
              <button
                aria-label="Show All Applications"
                tabindex="0"
                class="bx--product-switcher__all-btn"
              >
                View all products
              </button>
            </div>
          </div>
        </aside>
        <div class="bx--content">
          <UIShellBody />
        </div>
      </div>
    );
  }
}

export default UIShell;
