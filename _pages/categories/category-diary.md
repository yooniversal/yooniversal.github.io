---
title: "Diary"
layout: archive
permalink: /Diary
author_profile: true
sidebar:
  nav: "sidebar-category"
---


{% assign posts = site.categories.Diary %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}