// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ThhaV9C1QQJwzDebzYyXC
// Component: uUFLVNU1uN5F

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import NavigationBar from "../../NavigationBar"; // plasmic-import: 7P2gVmn4xlJ3/component
import ProjectHeader from "../../ProjectHeader"; // plasmic-import: aGLdP3kNDzIT/component
import ProjectCard from "../../ProjectCard"; // plasmic-import: NbMbua414n9v/component
import ContactSection from "../../ContactSection"; // plasmic-import: 8hweSnSh0PAv/component
import Footer from "../../Footer"; // plasmic-import: gArOFKi6Mp9p/component

import { useScreenVariants as useScreenVariantskBSnWajzGcx6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: kBSnWajzGCX6/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: ThhaV9C1QQJwzDebzYyXC/projectcss
import sty from "./PlasmicProjectRelaunch.module.css"; // plasmic-import: uUFLVNU1uN5F/css

createPlasmicElementProxy;

export type PlasmicProjectRelaunch__VariantMembers = {};
export type PlasmicProjectRelaunch__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjectRelaunch__VariantsArgs;
export const PlasmicProjectRelaunch__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProjectRelaunch__ArgsType = {};
type ArgPropType = keyof PlasmicProjectRelaunch__ArgsType;
export const PlasmicProjectRelaunch__ArgProps = new Array<ArgPropType>();

export type PlasmicProjectRelaunch__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  projectHeader?: Flex__<typeof ProjectHeader>;
  h2?: Flex__<"h2">;
  contactSection?: Flex__<typeof ContactSection>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultProjectRelaunchProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProjectRelaunch__RenderFunc(props: {
  variants: PlasmicProjectRelaunch__VariantsArgs;
  args: PlasmicProjectRelaunch__ArgsType;
  overrides: PlasmicProjectRelaunch__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskBSnWajzGcx6()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicProjectRelaunch.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicProjectRelaunch.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicProjectRelaunch.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicProjectRelaunch.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicProjectRelaunch.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicProjectRelaunch.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            className={classNames("__wab_instance", sty.navigationBar)}
          />

          <ProjectHeader
            data-plasmic-name={"projectHeader"}
            data-plasmic-override={overrides.projectHeader}
            className={classNames("__wab_instance", sty.projectHeader)}
            timeline={"Sep - Dec 2023"}
            title={"Project Relaunch"}
          />

          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__haUkk)}
            id={"Services"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__sgIJo)}
              displayHeight={"700px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/localhost/images/wallpaperjpg.jpg",
                fullWidth: 1921,
                fullHeight: 1081,
                aspectRatio: undefined
              }}
            />
          </Stack__>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__gaT2)}
            id={"work"}
          >
            <div className={classNames(projectcss.all, sty.freeBox___8Erx4)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__siJhZ
                )}
              >
                {"The Client."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nplWo
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__nDvb)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__xPk5U
                )}
              >
                {"The Problem."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__irVev
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___9JPpl)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__mzOj4
                )}
              >
                {"The Solution."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___26AbB
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__sRrnk)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__aQoS)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__v0WfT)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/localhost/images/studentGae18422981280Jpg.jpg",
                    fullWidth: 1280,
                    fullHeight: 853,
                    aspectRatio: undefined
                  }}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns__erG90)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__ywlYr)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__qVjN)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/localhost/images/laptopG9B1Ff63691280Jpg.jpg",
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__gaGrP)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__htnYc)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/localhost/images/entrepreneurG23179Fc2C1280Jpg.jpg",
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__cW3Zq)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__lVyCs
                  )}
                >
                  {"The Process."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uhSHf
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__a6AhD)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__pbdlZ)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__zFpg)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/localhost/images/laptopG9A7A99E251920Jpg.jpg",
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___5Qwa)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___0U6JE
                  )}
                >
                  {"The Result."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__scOhI
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section___6GkR)}
              id={"contact"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__vImkF)}>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"See my all other \nprojects."}
                </h2>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__hv2Qp)}
              >
                <div className={classNames(projectcss.all, sty.column__g3K8D)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__jGfvZ
                    )}
                    image={{
                      src: "/plasmic/localhost/images/abstractBackgroundJpg.jpg",
                      fullWidth: 1920,
                      fullHeight: 1171,
                      aspectRatio: undefined
                    }}
                    link={`/web-visual-design`}
                    title={"Web Visual Design"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column___0Tj8F)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard___0VVxs
                    )}
                    link={`/project-relaunch`}
                    title={"Project Relaunch"}
                  />
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <ContactSection
            data-plasmic-name={"contactSection"}
            data-plasmic-override={overrides.contactSection}
            className={classNames("__wab_instance", sty.contactSection)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "projectHeader",
    "h2",
    "contactSection",
    "footer"
  ],
  navigationBar: ["navigationBar"],
  projectHeader: ["projectHeader"],
  h2: ["h2"],
  contactSection: ["contactSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  projectHeader: typeof ProjectHeader;
  h2: "h2";
  contactSection: typeof ContactSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectRelaunch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectRelaunch__VariantsArgs;
    args?: PlasmicProjectRelaunch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectRelaunch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjectRelaunch__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProjectRelaunch__ArgProps,
          internalVariantPropNames: PlasmicProjectRelaunch__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjectRelaunch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectRelaunch";
  } else {
    func.displayName = `PlasmicProjectRelaunch.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectRelaunch = Object.assign(
  // Top-level PlasmicProjectRelaunch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    projectHeader: makeNodeComponent("projectHeader"),
    h2: makeNodeComponent("h2"),
    contactSection: makeNodeComponent("contactSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicProjectRelaunch
    internalVariantProps: PlasmicProjectRelaunch__VariantProps,
    internalArgProps: PlasmicProjectRelaunch__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Project Relaunch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProjectRelaunch;
/* prettier-ignore-end */