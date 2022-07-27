---
<%*
    let filename = tp.file.title;
    let title = filename;
    let uid = await tp.user.uid(7);
    if (filename.includes("Untitled")) {
      filename = uid;
      title = "";
    }
    await tp.file.rename(filename);
-%>
creation_date: '<% tp.date.now("YYYY-MM-DD HH:MM") %>'
uid: '<% uid %>'
aliases: ['<% title %>']
published: false
listed: false
permalink: '/<% uid %>'
title: '<% title %>'
description: ''
publication_date:
last_modified_at: '<% tp.date.now("YYYY-MM-DD") %>'
---
