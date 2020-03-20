import React from "react";
import _ from "lodash";

import { Link, safePrefix, htmlToReact } from "../utils";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer id="colophon" className="site-footer">
          <div className="footer-top outer">
            <div className="inner">
              <div className="footer-widgets">
                <div className="widget footer-branding">
                  {_.get(
                    this.props,
                    "pageContext.site.siteMetadata.footer.logo_img"
                  ) ? (
                    <p className="site-logo">
                      <Link to={safePrefix("/")}>
                        <img
                          src={safePrefix(
                            _.get(
                              this.props,
                              "pageContext.site.siteMetadata.footer.logo_img"
                            )
                          )}
                          alt="Logo"
                        />
                      </Link>
                    </p>
                  ) : (
                    <p className="site-title">
                      <Link to={safePrefix("/")}>
                        {_.get(
                          this.props,
                          "pageContext.site.siteMetadata.header.title"
                        )}
                      </Link>
                    </p>
                  )}
                  {_.get(
                    this.props,
                    "pageContext.site.siteMetadata.footer.tagline"
                  ) && (
                    <p className="site-description">
                      {_.get(
                        this.props,
                        "pageContext.site.siteMetadata.footer.tagline"
                      )}
                    </p>
                  )}
                </div>
                {((_.get(this.props, "pageContext.menus.secondary") &&
                  _.get(
                    this.props,
                    "pageContext.site.siteMetadata.footer.has_nav"
                  )) ||
                  _.get(
                    this.props,
                    "pageContext.site.siteMetadata.footer.has_social"
                  )) && (
                  <nav className="widget footer-navigation">
                    <div className="footer-nav-inside">
                      {_.get(this.props, "pageContext.menus.secondary") &&
                        _.get(
                          this.props,
                          "pageContext.site.siteMetadata.footer.has_nav"
                        ) && (
                          <div className="secondary-nav">
                            <h2 className="widget-title">
                              {_.get(
                                this.props,
                                "pageContext.site.siteMetadata.footer.nav_title"
                              )}
                            </h2>
                            <ul className="secondary-menu">
                              {_.map(
                                _.get(
                                  this.props,
                                  "pageContext.menus.secondary"
                                ),
                                (item, item_idx) => (
                                  <li key={item_idx}>
                                    <Link to={safePrefix(_.get(item, "url"))}>
                                      {_.get(item, "title")}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      {_.get(
                        this.props,
                        "pageContext.site.siteMetadata.footer.has_social"
                      ) && (
                        <div className="social-nav">
                          <h2 className="widget-title">
                            {_.get(
                              this.props,
                              "pageContext.site.siteMetadata.footer.social_title"
                            )}
                          </h2>
                          <Social {...this.props} />
                        </div>
                      )}
                    </div>
                  </nav>
                )}
                {_.get(
                  this.props,
                  "pageContext.site.siteMetadata.footer.has_subscribe"
                ) && (
                  <div className="widget footer-subscribe">
                    <h2 className="widget-title">
                      {_.get(
                        this.props,
                        "pageContext.site.siteMetadata.footer.subscribe_title"
                      )}
                    </h2>
                    {_.get(
                      this.props,
                      "pageContext.site.siteMetadata.footer.subscribe_content"
                    ) && (
                      <p>
                        {htmlToReact(
                          _.get(
                            this.props,
                            "pageContext.site.siteMetadata.footer.subscribe_content"
                          )
                        )}
                      </p>
                    )}
                    <SubscribeForm {...this.props} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="site-info outer">
            <div className="inner">
              {htmlToReact(
                _.get(
                  this.props,
                  "pageContext.site.siteMetadata.footer.content"
                )
              )}
              &nbsp;
              {_.map(
                _.get(this.props, "pageContext.site.siteMetadata.footer.links"),
                (link, link_idx) => (
                  <React.Fragment key={link_idx}>
                    <Link
                      key={link_idx}
                      to={_.get(link, "url")}
                      {...(_.get(link, "new_window")
                        ? { target: "_blank", rel: "noopener" }
                        : null)}
                    >
                      {_.get(link, "text")}
                    </Link>
                    .
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </footer>
        <aside className="footer-below">
          <a href="https://www.baseline-protocol.org/" className="copyright">
            © 2020 OASIS Open
          </a>
          <div className="oasis-required-language">
            <p>
              Baseline is an{" "}
              <a href="https://oasis-open-projects.org/">OASIS Open Project</a>.
              All Rights Reserved.
              <br />
              OASIS{" "}
              <a href="https://www.oasis-open.org/policies-guidelines/trademark">
                trademark
              </a>
              ,{" "}
              <a href="https://www.oasis-open.org/policies-guidelines/ipr">
                IPR
              </a>
              ,{" "}
              <a href="https://www.oasis-open.org/policies-guidelines/privacy">
                Privacy
              </a>
              , and other{" "}
              <a href="https://www.oasis-open.org/policies-guidelines">
                policies
              </a>{" "}
              apply.
              <br />
              <a href="communications@oasis-open.org">Contact OASIS</a> for
              details.
            </p>
            <div>
              <p>
                Subscribe to our{" "}
                <a href="mailto:baseline+subscribe@lists.oasis-open-projects.org">
                  {" "}
                  mailing list
                </a>
                .
              </p>
            </div>
          </div>
          <div className="links">
            <a
              href="https://twitter.com/baselineproto"
              target="_blank"
              rel="noopener noreferrer"
              className="link-transition twitter link dib z-999 pt3 pt0-l mr1"
              title="Twitter link"
              aria-label="follow on Twitter——Opens in a new window"
            >
              <svg
                height="32px"
                style={{ enableBackground: "new 0 0 67 67" }}
                version="1.1"
                viewBox="0 0 67 67"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.167,22.283c-2.619,0.953-4.274,3.411-4.086,6.101  l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017c-0.754,2.267-0.272,4.661,1.299,6.271  c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233c-0.146,0.149,0.356,2.076,0.754,2.839  c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021c-1.173,0-1.215,0.021-1.089,0.467  c0.419,1.377,2.074,2.839,3.918,3.475l1.299,0.444l-1.131,0.678c-1.676,0.976-3.646,1.526-5.616,1.568  C19.775,43.256,19,43.341,19,43.405c0,0.211,2.557,1.397,4.044,1.864c4.463,1.377,9.765,0.783,13.746-1.568  c2.829-1.673,5.657-5,6.978-8.221c0.713-1.716,1.425-4.851,1.425-6.354c0-0.975,0.063-1.102,1.236-2.267  c0.692-0.678,1.341-1.419,1.467-1.631c0.21-0.403,0.188-0.403-0.88-0.043c-1.781,0.636-2.033,0.551-1.152-0.402  c0.649-0.678,1.425-1.907,1.425-2.267c0-0.063-0.314,0.042-0.671,0.233c-0.377,0.212-1.215,0.53-1.844,0.72l-1.131,0.361l-1.027-0.7  c-0.566-0.381-1.361-0.805-1.781-0.932C39.766,21.902,38.131,21.944,37.167,22.283z M33,64C16.432,64,3,50.569,3,34S16.432,4,33,4  s30,13.431,30,30S49.568,64,33,64z"
                  style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                ></path>
              </svg>
              {` `}
              <span className="new-window">
                <svg
                  height="8px"
                  style={{ enableBackground: "new 0 0 1000 1000" }}
                  version="1.1"
                  viewBox="0 0 1000 1000"
                  width="8px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298c0 46-40 86-86 86h-596c-48 0-86-40-86-86v-596c0-46 38-86 86-86h298v86h-298v596h596z"
                    style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCPkZ73TH69tMBaC111wxHYw/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="link-transition youtube link"
              title="Youtube link"
              aria-label="follow on Youtube——Opens in a new window"
            >
              <svg
                height="32px"
                style={{ enableBackground: "new 0 0 67 67" }}
                version="1.1"
                viewBox="0 0 67 67"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.527,41.34c-0.278,0-0.478,0.078-0.6,0.244  c-0.121,0.156-0.18,0.424-0.18,0.796v0.896h1.543V42.38c0-0.372-0.062-0.64-0.185-0.796C42.989,41.418,42.792,41.34,42.527,41.34z   M36.509,41.309c0.234,0,0.417,0.076,0.544,0.23c0.123,0.155,0.185,0.383,0.185,0.682v4.584c0,0.286-0.053,0.487-0.153,0.611  c-0.1,0.127-0.256,0.189-0.47,0.189c-0.148,0-0.287-0.033-0.421-0.096c-0.135-0.062-0.274-0.171-0.415-0.313v-5.531  c0.119-0.122,0.239-0.213,0.36-0.271C36.26,41.335,36.383,41.309,36.509,41.309z M41.748,44.658v1.672  c0,0.468,0.057,0.792,0.17,0.974c0.118,0.181,0.313,0.269,0.592,0.269c0.289,0,0.491-0.076,0.606-0.229  c0.114-0.153,0.175-0.489,0.175-1.013v-0.405h1.795v0.456c0,0.911-0.217,1.596-0.657,2.059c-0.435,0.459-1.089,0.687-1.958,0.687  c-0.781,0-1.398-0.242-1.847-0.731c-0.448-0.486-0.676-1.157-0.676-2.014v-3.986c0-0.768,0.249-1.398,0.742-1.882  c0.493-0.484,1.128-0.727,1.911-0.727c0.799,0,1.413,0.225,1.843,0.674c0.429,0.448,0.642,1.093,0.642,1.935v2.264H41.748z   M38.623,48.495c-0.271,0.336-0.669,0.501-1.187,0.501c-0.343,0-0.646-0.062-0.912-0.192c-0.267-0.129-0.519-0.327-0.746-0.601  v0.681h-1.764V36.852h1.764v3.875c0.237-0.27,0.485-0.478,0.748-0.616c0.267-0.143,0.534-0.212,0.805-0.212  c0.554,0,0.975,0.189,1.265,0.565c0.294,0.379,0.438,0.933,0.438,1.66v4.926C39.034,47.678,38.897,48.159,38.623,48.495z   M30.958,48.884v-0.976c-0.325,0.361-0.658,0.636-1.009,0.822c-0.349,0.191-0.686,0.282-1.014,0.282  c-0.405,0-0.705-0.129-0.913-0.396c-0.201-0.266-0.305-0.658-0.305-1.189v-7.422h1.744v6.809c0,0.211,0.037,0.362,0.107,0.457  c0.077,0.095,0.196,0.141,0.358,0.141c0.128,0,0.292-0.062,0.488-0.188c0.197-0.125,0.375-0.283,0.542-0.475v-6.744h1.744v8.878  H30.958z M24.916,38.6v10.284h-1.968V38.6h-2.034v-1.748h6.036V38.6H24.916z M32.994,32.978c0-0.001,12.08,0.018,13.514,1.45  c1.439,1.435,1.455,8.514,1.455,8.555c0,0-0.012,7.117-1.455,8.556C45.074,52.969,32.994,53,32.994,53s-12.079-0.031-13.516-1.462  c-1.438-1.435-1.441-8.502-1.441-8.556c0-0.041,0.004-7.12,1.441-8.555C20.916,32.996,32.994,32.977,32.994,32.978z M42.52,29.255  h-1.966v-1.08c-0.358,0.397-0.736,0.703-1.13,0.909c-0.392,0.208-0.771,0.312-1.14,0.312c-0.458,0-0.797-0.146-1.027-0.437  c-0.229-0.291-0.345-0.727-0.345-1.311v-8.172h1.962v7.497c0,0.231,0.045,0.399,0.127,0.502c0.08,0.104,0.216,0.156,0.399,0.156  c0.143,0,0.327-0.069,0.548-0.206c0.22-0.137,0.423-0.312,0.605-0.527v-7.422h1.966V29.255z M31.847,27.588  c0.139,0.147,0.339,0.219,0.6,0.219c0.266,0,0.476-0.075,0.634-0.223c0.157-0.152,0.235-0.358,0.235-0.618v-5.327  c0-0.214-0.08-0.387-0.241-0.519c-0.16-0.131-0.37-0.196-0.628-0.196c-0.241,0-0.435,0.065-0.586,0.196  c-0.148,0.132-0.225,0.305-0.225,0.519v5.327C31.636,27.233,31.708,27.439,31.847,27.588z M30.408,19.903  c0.528-0.449,1.241-0.674,2.132-0.674c0.812,0,1.48,0.237,2.001,0.711c0.517,0.473,0.777,1.083,0.777,1.828v5.051  c0,0.836-0.255,1.491-0.762,1.968c-0.513,0.476-1.212,0.714-2.106,0.714c-0.858,0-1.547-0.246-2.064-0.736  c-0.513-0.492-0.772-1.152-0.772-1.983v-5.068C29.613,20.954,29.877,20.351,30.408,19.903z M24.262,16h-2.229l2.634,8.003v5.252  h2.213v-5.5L29.454,16h-2.25l-1.366,5.298h-0.139L24.262,16z M33,64C16.432,64,3,50.569,3,34S16.432,4,33,4s30,13.431,30,30  S49.568,64,33,64z"
                  style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                ></path>
              </svg>
              {` `}
              <span className="new-window">
                <svg
                  height="8px"
                  style={{ enableBackground: "new 0 0 1000 1000" }}
                  version="1.1"
                  viewBox="0 0 1000 1000"
                  width="8px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298c0 46-40 86-86 86h-596c-48 0-86-40-86-86v-596c0-46 38-86 86-86h298v86h-298v596h596z"
                    style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="https://github.com/ethereum-oasis/baseline"
              target="_blank"
              rel="noopener noreferrer"
              className="link-transition github link"
              title="Github link"
              aria-label="follow on Github——Opens in a new window"
            >
              <svg
                height="32px"
                style={{ enableBackground: "new 0 0 512 512" }}
                version="1.1"
                viewBox="0 0 512 512"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"></path>
              </svg>
              {` `}
              <span className="new-window">
                <svg
                  height="8px"
                  style={{ enableBackground: "new 0 0 1000 1000" }}
                  version="1.1"
                  viewBox="0 0 1000 1000"
                  width="8px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298c0 46-40 86-86 86h-596c-48 0-86-40-86-86v-596c0-46 38-86 86-86h298v86h-298v596h596z"
                    style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </aside>
      </>
    );
  }
}
