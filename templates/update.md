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
uid: '<% uid %>'
aliases: ['<% title %>']
published: false
listed: false
permalink: '/<% uid %>'
title: '<% title %>'
description: ''
publication_date:
last_modified_at: '<% tp.date.now("YYYY-MM-DD") %>'