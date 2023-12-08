export const createElement = ({
  tagName,
  className,
  attributes = {},
  innerElements = [],
}) => {
  const element = document.createElement(tagName);

  if (className) {
    addClass(element, className);
  }

  Object.keys(attributes).forEach((key) =>
    element.setAttribute(key, attributes[key])
  );

  innerElements.forEach((innerElement) => element.append(innerElement));

  return element;
};

export const addClass = (element, className) => {
  const classNames = formatClassNames(className);
  element.classList.add(...classNames);
};

export const removeClass = (element, className) => {
  const classNames = formatClassNames(className);
  element.classList.remove(...classNames);
};

export function removeAllChildren(element) {
  let delChild = element.lastChild;
  while (delChild) {
    element?.removeChild(delChild);
    delChild = element.lastChild;
  }
}

export const formatClassNames = (className) =>
  className.split(" ").filter(Boolean);
