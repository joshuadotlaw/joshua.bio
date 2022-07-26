---
<%* let uid = await tp.user.uid(7) -%>
<%* await tp.file.rename(uid) -%>
creation_date: '<% tp.date.now("YYYY-MM-DD HH:MM") %>'
uid: '<% uid %>'
aliases: ['']
published: false
listed: false
permalink: '/<% uid %>'
title: ''
description: ''
publication_date:
last_modified_at: '<% tp.date.now("YYYY-MM-DD") %>'
---
