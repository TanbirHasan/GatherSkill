import React, { useEffect, useState } from "react";
import style from "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URI } from "../../config/contants";

export default function Courses() {

 
  return (
    <section class="articles">
      <div className="articles-inner">
        <article>
        <Link to="/courseDetails">
          <div class="article-wrapper">
            
              <figure>
                <img
                  src="https://www.simplilearn.com/ice9/free_resources_article_thumb/fullstack_php_js.jpg"
                  alt=""
                />
              </figure>
              <div class="article-body">
                <h2>Full Stack Web</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <a href="#" class="read-more">
                  Continue Courses{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
          
          </div>
          </Link>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="https://visme.co/blog/wp-content/uploads/2021/10/what-is-graphic-design-header-1200.png"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>Graphic Design</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" class="read-more">
                Continue Courses{" "}
                <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="https://hetic.in/wp-content/uploads/2019/10/Digital-Marketing-1.jpg"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>Digital Marketing</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" class="read-more">
                Continue Courses{" "}
                <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
