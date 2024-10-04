'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, BookOpenIcon } from "lucide-react"

type Post = {
  slug: string
  title: string
  date: string
  completed: boolean
}

export default function BlogPosts({ initialPosts }: { initialPosts: Omit<Post, 'completed'>[] }) {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const storedCompletionStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}')
    
    const postsWithCompletion = initialPosts.map(post => ({
      ...post,
      completed: storedCompletionStatus[post.slug] ?? false
    }))
    
    setPosts(postsWithCompletion)
  }, [initialPosts])

  const toggleCompletion = (slug: string) => {
    setPosts(currentPosts => 
      currentPosts.map(post => 
        post.slug === slug ? { ...post, completed: !post.completed } : post
      )
    )

    const updatedStatus = posts.reduce((acc, post) => {
      acc[post.slug] = post.slug === slug ? !post.completed : post.completed
      return acc
    }, {} as Record<string, boolean>)

    localStorage.setItem('completionStatus', JSON.stringify(updatedStatus))
  }

  return (
    <Card className="mb-6">
      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6 text-blue-600 text-center">Plano de Estudo (30 dias)</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden sm:table-cell w-[150px]">Data</TableHead>
                <TableHead className="sm:pl-32">Título</TableHead>
                <TableHead className="w-[70px] sm:w-[100px] text-right">Feito</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map(({ slug, title, date, completed }) => (
                <TableRow key={slug} className="group hover:bg-muted/50 transition-colors">
                  <TableCell className="hidden sm:table-cell font-medium">
                    <div className="flex items-center text-base">
                      <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                      {date}
                    </div>
                  </TableCell>
                  <TableCell className="sm:pl-32">
                    <Link 
                      href={`/${slug}`} 
                      className="flex items-center text-blue-600 hover:underline text-sm sm:text-lg"
                    >
                      <BookOpenIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-black flex-shrink-0" />
                      <span className="line-clamp-2">
                        <span className="sm:hidden text-xs text-gray-500 block">{date}</span>
                        {title}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox
                      checked={completed}
                      onCheckedChange={() => toggleCompletion(slug)}
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}