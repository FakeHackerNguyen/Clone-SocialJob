import React, { useEffect, useState } from "react";
import { getAllJobs, getSingleJob } from "../../apis/job";
import { calculateTime } from "../../utils/helper";
import { useSearch } from "../../hooks";

import DetailJob from "./DetailJob";

/* eslint-disable react/prop-types */
function SearchJobsResults() {
  const [currentJob, setCurrentJob] = useState();
  const [jobs, setJobs] = useState([]);

  const { searchInfo } = useSearch();

  const handleDetailJob = async function (jobId) {
    const { error, job } = await getSingleJob({ jobId: jobId });
    if (error) return;

    setCurrentJob(job);
  };

  const getJobs = async function () {
    const { error, jobs } = await getAllJobs();
    if (error) return;

    setJobs(jobs);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="jobs base-serp-page__content">
      {searchInfo.jobs?.length === 0 ? (
        <main id="main-content" role="main">
          <section className="people empty-search-header empty-search-header--center-aligned">
            <img
              className="people empty-search-header__image lazy-loaded"
              alt=""
              aria-busy="false"
              src="https://static.licdn.com/aero-v1/sc/h/dfa1erc1uncnl1po7l2v7yawd"
            />

            <section className="people core-section-container my-3">
              <h1
                className="people core-section-container__main-title main-title"
                style={{ fontWeight: "400" }}
              >
                Try searching for your co-worker, classmate, professor, or
                friend.
              </h1>

              <div className="people core-section-container__content break-words"></div>
            </section>
          </section>
        </main>
      ) : (
        <React.Fragment>
          <main
            id="main-content"
            className="jobs two-pane-serp-page__results"
            role="main"
          >
            {/* <div className="jobs results-context-header">
          <h1 className="jobs results-context-header__context">
            <span className="jobs results-context-header__job-count">42</span>{" "}
            <span className="jobs results-context-header__query-search">
              FullStack Jobs in Ho Chi Minh City, Ho Chi Minh City, Vietnam
            </span>
            <span className="jobs results-context-header__new-jobs">
              (5&nbsp;new)
            </span>
          </h1>
        </div> */}
            <section className="jobs two-pane-serp-page__results-list">
              <ul className="jobs jobs-search__results-list">
                {searchInfo.jobs.length === 0
                  ? jobs.map((job, index) => (
                      <li key={index} onClick={() => handleDetailJob(job._id)}>
                        <div className="jobs base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card job-search-card--active">
                          <a className="jobs base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]">
                            <span className="people sr-only">
                              {`${job?.jobTitle} - ${job?.jobLocation} - ${job?.workplaceType}`}
                            </span>
                          </a>

                          <div className="jobs search-entity-media">
                            <img
                              className="jobs artdeco-entity-image artdeco-entity-image--square-4 lazy-loaded"
                              alt=""
                              src={job?.company?.avatar?.url}
                            />
                          </div>

                          <div className="jobs base-search-card__info">
                            <h3 className="jobs base-search-card__title">
                              {`${job?.jobTitle} - ${job?.jobLocation} - ${job?.workplaceType}`}
                            </h3>

                            <h4 className="jobs base-search-card__subtitle">
                              <a className="jobs hidden-nested-link">
                                {job?.company?.name}
                              </a>
                            </h4>

                            <div className="jobs base-search-card__metadata">
                              <span className="jobs job-search-card__location">
                                {job?.jobLocation}
                              </span>

                              <time className="jobs job-search-card__listdate">
                                {calculateTime(job.updatedAt)}
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  : searchInfo.jobs.map((job, index) => (
                      <li key={index} onClick={() => handleDetailJob(job._id)}>
                        <div className="jobs base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card job-search-card--active">
                          <a className="jobs base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]">
                            <span className="people sr-only">
                              {`${job?.jobTitle} - ${job?.jobLocation} - ${job?.workplaceType}`}
                            </span>
                          </a>

                          <div className="jobs search-entity-media">
                            <img
                              className="jobs artdeco-entity-image artdeco-entity-image--square-4 lazy-loaded"
                              alt=""
                              src={job?.company?.avatar?.url}
                            />
                          </div>

                          <div className="jobs base-search-card__info">
                            <h3 className="jobs base-search-card__title">
                              {`${job?.jobTitle} - ${job?.jobLocation} - ${job?.workplaceType}`}
                            </h3>

                            <h4 className="jobs base-search-card__subtitle">
                              <a className="jobs hidden-nested-link">
                                {job?.company?.name}
                              </a>
                            </h4>

                            <div className="jobs base-search-card__metadata">
                              <span className="jobs job-search-card__location">
                                {job?.jobLocation}
                              </span>

                              <time className="jobs job-search-card__listdate">
                                {calculateTime(job.updatedAt)}
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
              </ul>
            </section>
          </main>
          <DetailJob currentJob={currentJob || jobs[0]} />
        </React.Fragment>
      )}
    </div>
  );
}

export default SearchJobsResults;
