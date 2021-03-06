import {
  CreateNewThreadReq,
  CreateTopicReq,
  DeleteThreadReq,
  ForumStats,
  FullThread,
  GetReplyReportsRes,
  GetThreadReportsRes,
  GetThreadSummariesRes,
  GetThreadSummariesWCount,
  GetTopicSummariesRes,
  ModRemoveReplyReq,
  ModRemoveThreadReq,
  PostReplyReq,
  Reply,
  ReportReplyReq,
  ReportThreadReq,
  ThreadSummary,
  Topic,
  TopicSummary,
  UpdateReplyReq,
  UpdateThreadReq,
  UpdateTopicReq,
} from '../../models/forum.models';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ForumService } from './forum.service';
import { Observable } from 'rxjs';

export class ForumImplService implements ForumService {
  constructor(private http: HttpClient) {}

  getTopicSummaryById(id: number): Observable<TopicSummary> {
    return this.http.get<TopicSummary>(`${environment.backendHost}/api/db/forum/topics/${id}`, {
      withCredentials: true,
    });
  }

  getTopicSummaries(): Observable<GetTopicSummariesRes> {
    return this.http.get<GetTopicSummariesRes>(`${environment.backendHost}/api/db/forum/topics`, {
      withCredentials: true,
    });
  }

  createTopic(req: CreateTopicReq): Observable<Topic> {
    return this.http.post<Topic>(`${environment.backendHost}/api/db/forum/topics`, req, { withCredentials: true });
  }

  updateTopic(req: UpdateTopicReq): Observable<Topic> {
    return this.http.put<Topic>(`${environment.backendHost}/api/db/forum/topics/${req.id}`, req, {
      withCredentials: true,
    });
  }

  deleteTopic(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.backendHost}/api/db/forum/topics/${id}`, { withCredentials: true });
  }

  createNewThread(req: CreateNewThreadReq): Observable<ThreadSummary> {
    return this.http.post<ThreadSummary>(`${environment.backendHost}/api/db/forum/threads`, req, {
      withCredentials: true,
    });
  }

  modRemoveThread(req: ModRemoveThreadReq): Observable<any> {
    return this.http.delete<any>(`${environment.backendHost}/api/db/forum/threads/${req.id}`, {
      body: req,
      withCredentials: true,
    });
  }

  removeOwnThread(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.backendHost}/api/db/forum/threads/${id}`, {
      withCredentials: true,
    });
  }

  getAllThreads(limit: number, offset: number): Observable<GetThreadSummariesRes> {
    return this.http.get<GetThreadSummariesRes>(
      `${environment.backendHost}/api/db/forum/threads?limit=${limit}&offset=${offset}`,
      {
        withCredentials: true,
      }
    );
  }

  getThreadsForTopic(topicId: number, limit: number, offset: number): Observable<GetThreadSummariesRes> {
    return this.http.get<GetThreadSummariesRes>(
      `${environment.backendHost}/api/db/forum/threads?topic=${topicId}&limit=${limit}&offset=${offset}`,
      {
        withCredentials: true,
      }
    );
  }

  getThreadById(id: number): Observable<ThreadSummary> {
    return this.http.get<ThreadSummary>(`${environment.backendHost}/api/db/forum/threads/${id}`, {
      withCredentials: true,
    });
  }

  getThreadByIdWithReplies(id: number, replyLimit: number, replyOffset: number): Observable<FullThread> {
    return this.http.get<FullThread>(
      `${environment.backendHost}/api/db/forum/threads/${id}/replies?limit=${replyLimit}&offset=${replyOffset}`,
      { withCredentials: true }
    );
  }

  reportThread(req: ReportThreadReq): Observable<any> {
    return this.http.post<any>(`${environment.backendHost}/api/db/forum/threads/${req.id}/reports`, req, {
      withCredentials: true,
    });
  }

  likeThread(id: number): Observable<any> {
    return this.http.post<any>(
      `${environment.backendHost}/api/db/forum/threads/${id}/likes`,
      {},
      { withCredentials: true }
    );
  }

  unlikeThread(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.backendHost}/api/db/forum/threads/${id}/likes`, {
      withCredentials: true,
    });
  }

  likeReply(threadId: number, replyId: number): Observable<any> {
    return this.http.post<any>(
      `${environment.backendHost}/api/db/forum/threads/${threadId}/replies/${replyId}/likes`,
      {},
      { withCredentials: true }
    );
  }

  unlikeReply(threadId: number, replyId: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.backendHost}/api/db/forum/threads/${threadId}/replies/${replyId}/likes`,
      {
        withCredentials: true,
      }
    );
  }

  updateThread(req: UpdateThreadReq): Observable<ThreadSummary> {
    return this.http.put<ThreadSummary>(`${environment.backendHost}/api/db/forum/threads/${req.id}`, req, {
      withCredentials: true,
    });
  }

  deleteReply(threadId: number, replyId: number): Observable<any> {
    return this.http.delete(`${environment.backendHost}/api/db/forum/threads/${threadId}/replies/${replyId}`, {
      withCredentials: true,
    });
  }

  getReplyById(replyId: number): Observable<Reply> {
    return this.http.get<Reply>(`${environment.backendHost}/api/db/forum/threads/replies/${replyId}`, {
      withCredentials: true,
    });
  }

  postReply(req: PostReplyReq): Observable<Reply> {
    return this.http.post<Reply>(`${environment.backendHost}/api/db/forum/threads/${req.threadId}/replies`, req, {
      withCredentials: true,
    });
  }

  updateReply(req: UpdateReplyReq): Observable<Reply> {
    return this.http.put<Reply>(`${environment.backendHost}/api/db/forum/threads/replies/${req.replyId}`, req, {
      withCredentials: true,
    });
  }

  reportReply(req: ReportReplyReq): Observable<any> {
    return this.http.post(
      `${environment.backendHost}/api/db/forum/threads/${req.threadId}/replies/${req.replyId}/reports`,
      req,
      {
        withCredentials: true,
      }
    );
  }

  modRemoveReply(req: ModRemoveReplyReq): Observable<any> {
    return this.http.delete<any>(
      `${environment.backendHost}/api/db/forum/threads/${req.threadId}/replies/${req.replyId}`,
      {
        body: req,
        withCredentials: true,
      }
    );
  }

  getThreadReports(): Observable<GetThreadReportsRes> {
    return this.http.get<GetThreadReportsRes>(`${environment.backendHost}/api/db/forum/threads/reports`, {
      withCredentials: true,
    });
  }

  deleteThreadReport(id: number): Observable<any> {
    return this.http.delete(`${environment.backendHost}/api/db/forum/threads/reports/${id}`, { withCredentials: true });
  }

  deleteReplyReport(id: number): Observable<any> {
    return this.http.delete(`${environment.backendHost}/api/db/forum/threads/replies/reports/${id}`, {
      withCredentials: true,
    });
  }

  getReplyReports(): Observable<GetReplyReportsRes> {
    return this.http.get<GetReplyReportsRes>(`${environment.backendHost}/api/db/forum/threads/replies/reports`, {
      withCredentials: true,
    });
  }

  getLatestThreadsForAccount(id: number, count: number): Observable<GetThreadSummariesWCount> {
    return this.http.get<GetThreadSummariesWCount>(
      `${environment.backendHost}/api/db/forum/threads?limit=${count}&offset=0&account=${id}`,
      { withCredentials: true }
    );
  }

  getStatsForAccount(id: number): Observable<ForumStats> {
    return this.http.get<ForumStats>(`${environment.backendHost}/api/db/forum/utils/account-stats?account=${id}`, {
      withCredentials: true,
    });
  }
}
