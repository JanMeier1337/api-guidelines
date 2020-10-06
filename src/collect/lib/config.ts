/**
 * Creates configuration object for collector
 */
// eslint-disable-next-line
export function getConfig() {
  const res = {
    root: "./guidelines",
    dist: "./dist",
    examples: {
      root: "./src/examples",
    },
    templates: {
      root: "src/templates",
      partials: "src/templates/partials",
    },
    site: {
      name: "OTTO API Guidelines",
    },
    rules: {
      prefix: "R",
      matcher: "^R(?<id>[0-9]{6})$",
    },
    markdown: {
      blocks: {
        info: {
          tag: "div",
          class: "api-custom-container api-custom-container--info",
        },
        warning: {
          tag: "div",
          class: "api-custom-container api-custom-container--warning",
        },
        danger: {
          tag: "div",
          class: "api-custom-container api-custom-container--danger",
        },
        details: {
          tag: "details",
          class: "api-custom-container api-custom-container--details",
        },
      },
      accordion: {
        identifier: "accordion",
        marker: "|",
        attrs: {
          begin: "begin",
          end: "end",
          open: "open",
          title: "title",
        },
      },
      label: {
        attrs: {
          marker: "label",
        },
        classes: {
          base: "api-label",
          style: "api-label--%s",
        },
      },
      references: {
        identifier: "references",
        tag: "div",
        classes: "api-references",
      },
      footnote: {
        classes: {
          ref: "api-footnote-ref",
          list: "api-footnotes",
          backref: "api-footnote-backref",
        },
      },
    },
    debug: {
      model: "./tmp/model.json",
    },
  };
  return res;
}

export type Config = ReturnType<typeof getConfig>;
